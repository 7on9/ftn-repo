import { ChildModule } from '@libs/@core/decorator';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { RefixModule } from '../config-module';
import * as allService from './services';
import * as allController from './controllers';
import { AdminMiddleware } from './admin.middleware';
import {
  AuthMemberService,
  MemberRefreshTokenService,
} from '~ftn/x-modules/members/services';
// import { FirebaseService } from '~/x-modules/integration/services';
import { JwtService } from '@nestjs/jwt';
import { GeoService } from '../publics/services';

@ChildModule({
  prefix: RefixModule.admin,
  providers: [
    ...Object.values(allService),
    ...[
      AuthMemberService,
      JwtService,
      MemberRefreshTokenService,
      // FirebaseService
    ],
  ],
  controllers: [...Object.values(allController)],
})
export class AdminModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AdminMiddleware)
      .exclude()
      .forRoutes({
        path: `${RefixModule.admin}{/*path}`,
        method: RequestMethod.ALL,
      });
  }
}
