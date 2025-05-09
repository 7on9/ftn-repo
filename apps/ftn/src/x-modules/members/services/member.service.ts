import { Injectable } from '@nestjs/common';
import { BindRepo, DefTransaction } from '~/@core/decorator';
import { BusinessException } from '~/@systems/exceptions';
import {
  DeviceMemberRepo,
  DeviceRepo,
  MemberAddressRepo,
  MemberBusinessTypeRepo,
  MemberCardRepo,
  MemberRepo,
  PartnerStoreTellerRepo,
  PaymentTransactionDetailRepo,
  PaymentTransactionRepo,
} from '~/repositories/primary';
import { memberSessionContext } from '../member-session.context';
import { NSCard, NSMember, NSNotification, NSPayment } from '~/common/enums';
import {
  ListMemberReq,
  MyCardsReq,
  StatisticalDetailsReq,
  StatisticalReq,
  ListCardByMemberReq,
  UpdateMemberProfileReq,
  RegisterCollaboratorReq,
  RegisterAndBuyCardReq,
  UpdateMemberBankReq,
  ListBusinessTypeByMemberReq,
  CreatePartnerStoreTellerDto,
  UpdateMemberProfileByMemberIdReq,
  UpdateAvatarReq,
} from '~/dto/member.dto';
import { Between, ILike, In } from 'typeorm';
import { generateCodeHelper } from '~/common/helpers/generate-code.helper';
import { configEnv } from '~/@config/env';
import { NotificationDto, PushResult, RegisterFcmTokenReq } from '~/dto/notification.dto';
import { convertToDisplayTimezone, SuccessResponse } from '~/@systems/utils';
import {
  DeviceEntity,
  MemberAddressEntity,
  MemberBusinessTypeEntity,
  MemberEntity,
  PaymentTransactionDetailEntity,
} from '~/entities/primary';
import { FirebaseService, PaymentService, VihatService } from '~/x-modules/integration/services';
import { fileHelper } from '~/common/helpers/file.helper';
import { MapSepayListBank } from '~/common/constants/SepayListBank';
import { apeApiConnector } from '~/common/connectors';
import { FilterOneDto } from '~/dto/ape.dto';
import { AuthMemberService } from './auth-member.service';
import { JwtService } from '@nestjs/jwt';
import { CardService } from './card.service';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '~/assets/i18n.generated';
import { SystemValue } from '~/common/constants';

// List bank sepay https://qr.sepay.vn/banks.json

const { TIME_OUT_NOTIFICATION = 3 * 1000 } = SystemValue;

@Injectable()
export class MemberService {
  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private firebaseService: FirebaseService,
    private authMemberService: AuthMemberService,
    private jwtService: JwtService,
    private cardService: CardService,
    private notificationService: VihatService,
    private readonly paymentService: PaymentService,
  ) {}

  @BindRepo(MemberRepo)
  private memberRepo: MemberRepo;

  @BindRepo(PartnerStoreTellerRepo)
  private partnerStoreTellerRepo: PartnerStoreTellerRepo;

  @BindRepo(PaymentTransactionRepo)
  private paymentTransactionRepo: PaymentTransactionRepo;

  @BindRepo(PaymentTransactionDetailRepo)
  private paymentTransactionDetailRepo: PaymentTransactionDetailRepo;

  @BindRepo(MemberAddressRepo)
  private memberAddressRepo: MemberAddressRepo;
  async list(params: ListMemberReq) {
    const { memberId } = memberSessionContext;

    return await this.memberRepo.queryPagination(
      `
      SELECT * FROM members WHERE ${JSON.stringify({ memberId })}
      `,
      { pageIndex: params.pageIndex, pageSize: params.pageSize },
    );
  }

  async find(listId: string[]) {
    return await this.memberRepo.find({
      where: { id: In(listId) },
      select: ['id', 'fullName', 'address', 'phone', 'personalId', 'email', 'username'],
    });
  }

  async findOne(params: FilterOneDto) {
    return await this.memberRepo.findOne({
      where: params,
      select: [
        'id',
        'fullName',
        'address',
        'phone',
        'personalId',
        'email',
        'username',
      ],
    });
  }

  // Update member profile and default address
  @DefTransaction()
  async updateProfile(body: UpdateMemberProfileReq) {
    const { memberId } = memberSessionContext;
    const member = await this.memberRepo.findOne(memberId);
    if (!member) {
      throw new BusinessException(this.i18n.t('member.AuthMemberService.error.member_not_existed'));
    }

    const { provinceCode, districtCode, wardCode, ...resBody } = body;

    let defaultAddress: MemberAddressEntity;
    if (body.personalId && member.personalId !== body.personalId) {
      const length = body?.personalId.length;
      if (length < 9 || length > 12) throw new BusinessException('CCCD không đúng định dạng');
    }
    try {
      defaultAddress = await this.memberAddressRepo.findOne({
        isDefault: true,
        memberId,
      });
    } catch (error) {
      console.log('find default error', error);
    }

    if (!defaultAddress) {
      defaultAddress = new MemberAddressEntity();
      defaultAddress.isDefault = true;
    }

    await this.memberAddressRepo.save({
      ...defaultAddress,
      memberId,
      memberName: member.fullName,
      memberPhone: member.phone,
      provinceCode,
      districtCode,
      wardCode,
      address: resBody?.address,
    });

    delete member.password;
    return this.memberRepo.update(
      { id: memberId },
      {
        ...resBody,
      },
    );
  }
  // Update member profile and default address
  @DefTransaction()
  async updateAvatar(body: UpdateAvatarReq) {
    const { memberId } = memberSessionContext;
    const member = await this.memberRepo.findOne({ where: { id: memberId } });

    if (!member) {
      throw new BusinessException('Không tìm thấy thành viên');
    }

    if (!body?.avatarUrl) {
      throw new BusinessException('Avatar URL không hợp lệ');
    }

    await this.memberRepo.update({ id: memberId }, { avatarUrl: body.avatarUrl });

    return { message: 'Cập nhật avatar thành công' };
  }

  // Update member profile and default address
  @DefTransaction()
  async updateProfileByMemberId(body: UpdateMemberProfileByMemberIdReq) {
    const { memberId } = body;
    const member = await this.memberRepo.findOne(memberId);
    if (!member) {
      throw new BusinessException(this.i18n.t('member.AuthMemberService.error.member_not_existed'));
    }
    const { provinceCode, districtCode, wardCode, ...resBody } = body;

    let defaultAddress: MemberAddressEntity;

    if (body.personalId && member.personalId !== body.personalId) {
      const length = body?.personalId.length;
      if (length < 9 || length > 12) throw new BusinessException('CCCD không đúng định dạng');
    }

    try {
      defaultAddress = await this.memberAddressRepo.findOne({
        isDefault: true,
        memberId,
      });
    } catch (error) {
      console.log('find default error', error);
    }

    if (!defaultAddress) {
      defaultAddress = new MemberAddressEntity();
      defaultAddress.isDefault = true;
    }

    await this.memberAddressRepo.save({
      ...defaultAddress,
      memberId,
      provinceCode,
      districtCode,
      wardCode,
      address: resBody?.address,
    });

    delete member.password;
    delete resBody.memberId;
    return this.memberRepo.update(
      { id: memberId },
      {
        ...resBody,
      },
    );
  }
}
