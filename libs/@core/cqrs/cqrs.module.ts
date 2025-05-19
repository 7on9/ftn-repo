import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { KafkaModule } from '../kafka';

@Module({
  imports: [
    CqrsModule,
    KafkaModule,
  ],
  exports: [CqrsModule],
})
export class FtnCqrsModule {}
