import { ChildModule } from '@libs/@core/decorator';
import { MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { RefixModule } from '../config-module';
import * as allService from './services';
import * as allController from './controllers';
import { IntegrationMiddleware } from './integration.middleware';
import { GeoService } from '~ftn/x-modules/publics/services';

const serviceIn = [GeoService];
@ChildModule({
  prefix: RefixModule.integration,
  providers: [...Object.values(allService), ...serviceIn],
  controllers: [...Object.values(allController)],
})
export class IntegrationModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(IntegrationMiddleware)
      .exclude()
      .forRoutes({
        path: `${RefixModule.integration}*`,
        method: RequestMethod.ALL,
      });
  }
}
