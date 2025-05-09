import { ChildModule } from '@libs/@core/decorator';
import { MiddlewareConsumer, NestModule } from '@nestjs/common';
import { RefixModule } from '../config-module';
import * as allService from './services';
import * as allController from './controllers';

@ChildModule({
  prefix: RefixModule.publics,
  providers: [...Object.values(allService)],
  controllers: [...Object.values(allController)],
})
export class PublicModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {}
}
