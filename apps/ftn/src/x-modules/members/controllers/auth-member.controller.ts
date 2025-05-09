import { Body, Query, UnauthorizedException } from '@nestjs/common';
import {
  DefController,
  DefDelete,
  DefGet,
  DefPost,
} from '@libs/@core/decorator';
import {
  ForgotPasswordReq,
  LoginReq,
  RegisterMemberReq,
} from '~ftn/dto/auth.dto';
import { AuthMemberService, MemberService } from '../services';
import { ChangePasswordReq, ResetPasswordReq } from '~ftn/dto/member.dto';
import { UUIDReq } from '~ftn/dto/common.dto';

@DefController('auth')
export class AuthMemberController {
  constructor(
    private readonly authMemberService: AuthMemberService,
    private readonly memberService: MemberService,
  ) {}

  @DefPost('register', {
    summary: 'Register member',
  })
  register(@Body() body: RegisterMemberReq) {
    return this.authMemberService.register(body);
  }

  @DefPost('login', {
    summary: 'Member login',
  })
  create(@Body() body: LoginReq) {
    return this.authMemberService.login(body);
  }

  @DefGet('member-info', {
    summary: 'Member information',
  })
  memberInfo() {
    return this.authMemberService.memberInfo();
  }

  @DefGet('member-info-by-id', {
    summary: 'Member information',
  })
  memberInfoByMemberId(@Query() params: UUIDReq) {
    return this.authMemberService.memberInfoByMemberId(params?.id);
  }

  @DefDelete('delete', {
    summary: 'Delete member',
  })
  delete() {
    return this.authMemberService.delete();
  }

  // Forgot password
  @DefPost('forgot-password', {
    summary: 'Forgot password',
  })
  forgotPassword(@Body() body: ForgotPasswordReq) {
    return this.authMemberService.forgotPassword(body);
  }

  // Verify OTP code forgot password
  @DefPost('reset-password', {
    summary: 'Reset password',
  })
  resetPassword(@Body() body: ResetPasswordReq) {
    return this.authMemberService.resetPassword(body);
  }

  @DefGet('refresh-tokens', {
    summary: 'Get new token',
  })
  refreshToken(@Query('refreshToken') refreshToken: string) {
    if (!refreshToken) {
      throw new UnauthorizedException('Refresh token is required');
    }
    return this.authMemberService.refreshToken(refreshToken);
  }

  @DefPost('change-password', {
    summary: 'Change password',
  })
  changePassword(@Body() body: ChangePasswordReq) {
    return this.authMemberService.changePassword(body);
  }
}
