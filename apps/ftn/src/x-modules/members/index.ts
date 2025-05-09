import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ChildModule } from '~/@core/decorator';
import { RefixModule } from '../config-module';
import { FirebaseService, PaymentService, VihatService } from '../integration/services';
import { GeoService } from '../publics/services';
import * as allController from './controllers';
import { MemberMiddleware } from './member.middleware';
import * as allService from './services';

const serviceIn = [FirebaseService, VihatService, GeoService, PaymentService];

@ChildModule({
  prefix: RefixModule.members,
  providers: [...Object.values(allService), ...serviceIn],
  controllers: [...Object.values(allController)],
})
export class MemberModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(MemberMiddleware)
      .exclude(
        {
          path: `${RefixModule.members}/list`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/find`.trim(),
          method: RequestMethod.ALL,
        },
        // {
        //   path: `${RefixModule.members}/withdraw-request/create`.trim(),
        //   method: RequestMethod.ALL,
        // },
        // {
        //   path: `${RefixModule.members}/withdraw-request/list`.trim(),
        //   method: RequestMethod.ALL,
        // },
        // {
        //   path: `${RefixModule.members}/withdraw-request/detail`.trim(),
        //   method: RequestMethod.ALL,
        // },
        // {
        //   path: `${RefixModule.members}/withdraw-request/update`.trim(),
        //   method: RequestMethod.ALL,
        // },
        {
          path: `${RefixModule.members}/ape/setting_string/find_one_by_code`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_led`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_sme_360`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_health`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_tourism`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_social`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/find_banner_food`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/statistical/overview`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/statistical/details`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/find-detail`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/register`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/validate-register-info`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/login`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/login-partner`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/forgot-password`.trim(),
          method: RequestMethod.POST,
        },
        {
          path: `${RefixModule.members}/auth/reset-password`.trim(),
          method: RequestMethod.POST,
        },
        {
          path: `${RefixModule.members}/auth/register-collaborator`.trim(),
          method: RequestMethod.POST,
        },
        {
          path: `${RefixModule.members}/auth/register-and-buy-card`.trim(),
          method: RequestMethod.POST,
        },
        {
          path: `${RefixModule.members}/ape/setting_string/find_one`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/setting_string/find_list_by_code`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/cards/list`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/cards/list-by-type`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/cards/detail`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/list-cards-by-member`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/product/(.*)`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/refresh-tokens`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/ape/bank/list`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/ape/bank`.trim(),
          method: RequestMethod.GET,
        },
        {
          path: `${RefixModule.members}/list-businesstype-by-member`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/contract/genarate_template`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/contract/create_contract`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/contract/find_by_media_type`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/ape/contract/find_detail`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/contracts/(.*)`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/permission-groups/(.*)`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/user-permission-groups/(.*)`.trim(),
          method: RequestMethod.ALL,
        },
      )
      .forRoutes({ path: `${RefixModule.members}*`, method: RequestMethod.ALL });
  }
}
