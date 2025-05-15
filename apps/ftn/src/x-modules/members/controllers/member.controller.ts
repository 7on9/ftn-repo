import { Body, Query } from '@nestjs/common';
import { DefController, DefGet, DefPost, DefPut } from '@libs/@core/decorator';
import { MemberService } from '../services';
import {
  ListMemberReq,
  UpdateMemberProfileReq,
} from '~ftn/dto/member.dto';

@DefController()
export class MemberController {
  constructor(private readonly memberService: MemberService) {}

  @DefGet('list', {
    summary: 'Member list',
  })
  list(@Query() params: ListMemberReq) {
    return this.memberService.list(params);
  }

  @DefPut('update-profile', {
    summary: 'Update member profile',
  })
  updateProfile(@Body() body: UpdateMemberProfileReq) {
    return this.memberService.updateProfile(body);
  }
}
