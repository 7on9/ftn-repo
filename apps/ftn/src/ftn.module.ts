import { Module } from '@nestjs/common';
import { FtnController } from './ftn.controller';
import { FtnService } from './ftn.service';

@Module({
  imports: [],
  controllers: [FtnController],
  providers: [FtnService],
})
export class FtnModule {}
