import { Body } from '@nestjs/common';
import { DefController, DefPost } from '@libs/@core/decorator';
import {
  UpdatePassword
} from '~ftn/dto/member.dto';
import { MemberService } from '../services/member.service';

@DefController("member")
export class MemberController {
  constructor(
    private readonly memberService: MemberService,
  ) {}


  @DefPost('update-password', {
      summary: 'Update password for user',
    })
    updatePassword(@Body() body: UpdatePassword) {
    return this.memberService.updateNewPassword(body);
    }
}
