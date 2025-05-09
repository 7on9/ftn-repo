import { RequestContext } from '@libs/@core/context';
import { KeySessionContext } from '@libs/common/constants';
import { MemberSessionDto } from '~ftn/dto/auth.dto';

export class MemberSessionContext {
  get sessionData() {
    return RequestContext.getAttribute<MemberSessionDto>(
      KeySessionContext.MEMBER_SESSION,
    );
  }

  get accessToken() {
    return this.sessionData.accessToken;
  }
  get memberId() {
    return this?.sessionData?.sub;
  }
  get username() {
    return this.sessionData.username;
  }
}

export const memberSessionContext = new MemberSessionContext();
