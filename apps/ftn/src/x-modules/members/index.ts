import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ChildModule } from '@libs/@core/decorator';
import { RefixModule } from '../config-module';
import { GeoService } from '../publics/services';
import * as allController from './controllers';
import { MemberMiddleware } from './member.middleware';
import * as allService from './services';

const serviceIn = [GeoService];

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
          path: `${RefixModule.members}/auth/register`.trim(),
          method: RequestMethod.ALL,
        },
        {
          path: `${RefixModule.members}/auth/login`.trim(),
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
      )
      .forRoutes({
        path: `${RefixModule.members}{/*path}`,
        method: RequestMethod.ALL,
      });
  }
}
