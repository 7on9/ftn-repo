import { Injectable } from '@nestjs/common';
import { BindRepo, DefTransaction } from '@libs/@core/decorator';
import { BusinessException } from '@libs/@systems/exceptions';
import { MemberRepo } from '@libs/repositories/primary';
import { memberSessionContext } from '../member-session.context';

import { In } from 'typeorm';
import { AuthMemberService } from './auth-member.service';
import { JwtService } from '@nestjs/jwt';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '@libs/assets/i18n.generated';
import { SystemValue } from '@libs/common/constants';
import { ListMemberReq, UpdateMemberProfileReq } from '~ftn/dto/member.dto';

// List bank sepay https://qr.sepay.vn/banks.json

const { TIME_OUT_NOTIFICATION = 3 * 1000 } = SystemValue;

@Injectable()
export class MemberService {
  constructor(
    private readonly i18n: I18nService<I18nTranslations>,
    private authMemberService: AuthMemberService,
    private jwtService: JwtService,
  ) {}

  @BindRepo(MemberRepo)
  private memberRepo: MemberRepo;

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
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }

    const { provinceCode, districtCode, wardCode, ...resBody } = body;
    if (body.personalId && member.personalId !== body.personalId) {
      const length = body?.personalId.length;
      if (length < 9 || length > 12)
        throw new BusinessException('CCCD không đúng định dạng');
    }

    return this.memberRepo.update(
      { id: memberId },
      {
        ...resBody,
      },
    );
  }
}
