import { Module } from '@nestjs/common';
import { MessagingProducerService } from './producer.service';
import { MessagingConsumerService } from './consumer.service';

@Module({
  controllers: [],
  providers: [MessagingProducerService, MessagingConsumerService],
  exports: [MessagingProducerService, MessagingConsumerService],
})
export class MessagingModule {}
