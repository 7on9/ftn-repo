import { Module, Global } from '@nestjs/common';
import * as allService from './services';

@Global()
@Module({
  providers: [...Object.values(allService)],
  exports: [...Object.values(allService)],
})
export class GlobalModule {}
