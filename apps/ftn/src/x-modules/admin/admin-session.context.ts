import { RequestContext } from '@libs/@core/context';
import { KeySessionContext } from '@libs/common/constants';

export class AdminSessionContext {
  get sessionData() {
    return RequestContext.getAttribute<any>(KeySessionContext.ADMIN_SESSION);
  }
}

export const adminSessionContext = new AdminSessionContext();
