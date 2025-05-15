import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { BindRepo, DefTransaction } from '@libs/@core/decorator';
import securityHelper from '@libs/@core/helpers/security.helper';
import { BusinessException } from '@libs/@systems/exceptions';
import {
  JwtPayload,
  LoginReq,
  RegisterMemberReq,
  VerifyRegisterMemberReq,
} from '~ftn/dto/auth.dto';
import { MemberRepo } from '@libs/repositories/primary';
import { memberSessionContext } from '../member-session.context';
import { NSMember } from '@libs/common/enums';
import { SuccessResponse } from '@libs/@systems/utils';
import { SystemValue } from '@libs/common/constants/SystemValue';
import { customAlphabet } from 'nanoid';
import { configEnv } from '@libs/@config/env';
import { MemberRefreshTokenService } from './member-refresh-token.service';
import { I18nService } from 'nestjs-i18n';
import { I18nTranslations } from '@libs/assets/i18n.generated';
import {
  ChangePasswordReq,
  ResetPasswordReq,
  UpdatePassword,
} from '~ftn/dto/member.dto';
import { MemberEntity } from '@libs/entities/primary';
import { IsNull, Not } from 'typeorm';

@Injectable()
export class AuthMemberService {
  constructor(
    private jwtService: JwtService,
    private readonly memberRefreshTokenService: MemberRefreshTokenService,
    private readonly i18n: I18nService<I18nTranslations>,
  ) {}

  @BindRepo(MemberRepo)
  private memberRepo: MemberRepo;

  @DefTransaction()
  async register(body: RegisterMemberReq) {
    if (!body?.username) {
      Object.assign(body, {
        username: body.phone,
      });
    }
    if (!body?.password) {
      Object.assign(body, {
        password: SystemValue.DEFAULT_PASSWORD_MEMBER,
      });
    }
    const member = await this.memberRepo.findOne({
      where: {
        username: body?.username,
      },
    });
    if (member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_existed', {
          args: {
            username: body?.username,
          },
        }),
      );
    }

    let referrerId = undefined;

    const password = await securityHelper.hash(body.password);
    const newMember = await this.memberRepo.save(
      {
        ...body,
        password,
        addressType: NSMember.EAddressType.Company,
        referralCode: body?.username, //generateCodeHelper.generateMemberReferralCode(),
        referrerId,
      },
    );
    if (!newMember?.id) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_existed', {
          args: {
            username: body?.username,
          },
        }),
      );
    }

    const payload = {
      sub: newMember.id,
      ...newMember,
    };
    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.memberRefreshTokenService.generateRefreshToken(
        newMember.id,
      ),
      tokenType: 'Bearer',
      ...newMember,
    };
  }

  @DefTransaction()
  async registerOrCheckExisted(body: RegisterMemberReq) {
    if (!body?.username) {
      Object.assign(body, {
        username: body.phone,
      });
    }
    if (!body?.password) {
      Object.assign(body, {
        password: SystemValue.DEFAULT_PASSWORD_MEMBER,
      });
    }
    const member = await this.memberRepo.findOne({
      where: {
        username: body?.username,
      },
    });
    if (member) {
      return member;
    }

    const password = await securityHelper.hash(body.password);
    const { password: hashPassword, ...newMember } = await this.memberRepo.save(
      {
        ...body,
        password,
        addressType: NSMember.EAddressType.Company,
      },
    );

    return newMember;
  }

  async login(body: LoginReq) {
    const member = await this.memberRepo.findOne({
      where: {
        username: body?.username,
      },
    });
    if (!member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }
    if (member.status === NSMember.EStatus.Deleted) {
      throw new BusinessException('Member deleted');
    }
    const checkPass = await securityHelper.compare(
      body?.password,
      member.password,
    );
    if (!checkPass) {
      throw new BusinessException('Mật khẩu không hợp lệ');
    }
    const payload = {
      sub: member.id,
      ...member,
    };

    if (!member?.id) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }

    return {
      accessToken: await this.jwtService.signAsync(payload),
      refreshToken: await this.memberRefreshTokenService.generateRefreshToken(
        member.id,
      ),
      tokenType: 'Bearer',
      ...member,
    };
  }

  async memberInfo() {
    let isShowCode = true;
    const { memberId, sessionData } = memberSessionContext;
    const member = await this.memberRepo.findOne(memberId);
    if (!member?.id) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }
    let businessTypes = [];
    return {
      ...sessionData,
      ...member,
      refreshToken: await this.memberRefreshTokenService.generateRefreshToken(
        member.id,
      ),
      businessTypes,
      // referralCode,
      isShowCode,
    };
  }

  async memberInfoByMemberId(memberId: string) {
    let isShowCode = true;
    const member = await this.memberRepo.findOne(memberId);
    if (!member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }
    let businessTypes = [];
    return {
      ...member,
      businessTypes,
      isShowCode,
    };
  }

  async delete() {
    const { memberId } = memberSessionContext;
    const member = await this.memberRepo.findOne(memberId);
    if (!memberId || !member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }
    if (member.status === NSMember.EStatus.Deleted) {
      throw new BusinessException('Member already deleted');
    }
    await this.memberRepo.update(memberId, {
      status: NSMember.EStatus.Deleted,
    });
    return new SuccessResponse();
  }

  async forgotPassword({ username }) {
    try {
      return await this.memberRepo.update(
        { username },
        {
          password: SystemValue.DEFAULT_PASSWORD_MEMBER,
        },
      );
    } catch (error) {
      throw new Error(error);
    }
  }

  @DefTransaction()
  async resetPassword(req: ResetPasswordReq) {
    const { userId, otpCode, newPassword } = req;

    const member = await this.memberRepo.findOne(userId);
    if (!member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }

    member.password = await securityHelper.hash(newPassword);
    await this.memberRepo.save(member);

    return new SuccessResponse();
  }

  async refreshToken(refreshToken: string) {
    const { JWT_REFRESH_TOKEN_SECRET } = configEnv();

    const refreshTokenPayload = await this.jwtService.verifyAsync<JwtPayload>(
      refreshToken,
      {
        secret: JWT_REFRESH_TOKEN_SECRET,
      },
    );
    const { sub: memberId, exp: expiryDate } = refreshTokenPayload;
    if (!memberId) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }
    if (!expiryDate) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.token_expired'),
      );
    }

    const member = await this.memberRepo.findOne(memberId);

    if (!member) {
      throw new BusinessException(
        this.i18n.t('member.AuthMemberService.error.member_not_existed'),
      );
    }

    const accessTokenPayload = {
      sub: member.id,
      ...member,
    };

    return {
      accessToken: await this.jwtService.signAsync(accessTokenPayload),
      refreshToken: await this.memberRefreshTokenService.generateRefreshToken(
        memberId,
        refreshToken,
        new Date(expiryDate * 1000),
      ),
      tokenType: 'Bearer',
    };
  }

  @DefTransaction()
  async changePassword(
    body: ChangePasswordReq,
    memberIdExist?: string,
    skipOldPasswordCheck = false,
  ) {
    const { oldPassword, newPassword, newPasswordConfirm } = body;
    const memberId = memberIdExist ?? memberSessionContext.memberId;

    const member = await this.memberRepo.findOne({ where: { id: memberId } });
    if (!member) {
      throw new BusinessException(`Member not found with id ${memberId}`);
    }

    // Check if oldPassword matches the current password - skipOldPasswordCheck is used for forgot password flow
    if (!skipOldPasswordCheck) {
      if (!oldPassword) {
        throw new BusinessException('Vui lòng nhập mật khẩu cũ');
      }
      const checkOldPass = await securityHelper.compare(
        oldPassword,
        member.password,
      );
      if (!checkOldPass) {
        throw new BusinessException('Mật khẩu không hợp lệ');
      }
    }

    // Check if newPassword matches newPasswordConfirm
    if (newPassword !== newPasswordConfirm) {
      throw new BusinessException('Mật khẩu xác nhận không khớp');
    }

    // Validate password length
    if (newPassword.length < 8 || newPassword.length > 20) {
      throw new BusinessException('Mật khẩu phải có từ 8 đến 20 ký tự');
    }

    // Validate at least one uppercase letter
    if (!/[A-Z]/.test(newPassword)) {
      throw new BusinessException('Mật khẩu phải bao gồm 1 ký tự viết Hoa');
    }

    // Validate at least one lowercase letter
    if (!/[a-z]/.test(newPassword)) {
      throw new BusinessException('Mật khẩu phải chứ ít nhất 1 ký tự thường');
    }

    // Validate at least one digit
    if (!/\d/.test(newPassword)) {
      throw new BusinessException('Mật khẩu phải chứa ít nhất 1 số');
    }

    // Validate at least one special character from the allowed list
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(newPassword)) {
      throw new BusinessException(
        'Mật khẩu phải chứa ít nhất một ký tự đặc biệt',
      );
    }

    // Ensure no spaces in the password
    if (/\s/.test(newPassword)) {
      throw new BusinessException(
        'Mật khẩu không được chứa bất kỳ khoảng trắng nào.',
      );
    }

    return this.memberRepo.update(
      { id: memberId },
      { password: await securityHelper.hash(newPassword) },
    );
  }

  async isReferralCodeValid(referralCode: string) {
    const ref = await this.memberRepo.findOne({
      where: {
        referralCode,
      },
    });
    if (ref) {
      return true;
    }
    return false;
  }

  async isUsernameExisted(username: string) {
    const member = await this.memberRepo.findOne({
      where: {
        username,
      },
    });

    if (member) {
      return true;
    }
    return false;
  }

  async validateRegisterInfo(body: VerifyRegisterMemberReq) {
    const { referralCode, username } = body;
    if (referralCode) {
      const isReferralCodeValid = await this.isReferralCodeValid(referralCode);
      if (!isReferralCodeValid) {
        throw new BusinessException(
          this.i18n.t('member.AuthMemberService.error.referral_code_invalid'),
        );
      }
    }
    if (username) {
      const isUsernameExisted = await this.isUsernameExisted(username);
      if (isUsernameExisted) {
        throw new BusinessException(
          this.i18n.t('member.AuthMemberService.error.member_existed', {
            args: { username },
          }),
        );
      }
    }
    return new SuccessResponse();
  }
}
