import { Module } from '@nestjs/common';
import { FtnWorkerController } from './ftn-worker.controller';
import { FtnWorkerService } from './ftn-worker.service';

@Module({
  imports: [],
  controllers: [FtnWorkerController],
  providers: [FtnWorkerService],
})
export class FtnWorkerModule {}
