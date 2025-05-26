import { RequestContext } from '@libs/@core/context';
import { KeySessionContext } from '@libs/common/constants';

export class AgencySessionContext {
  get sessionData() {
    return RequestContext.getAttribute<any>(KeySessionContext.AGENCY_SESSION);
  }
}

export const agencySessionContext = new AgencySessionContext();
