import { Module } from '@nestjs/common';
import { FtnWorkerController } from './ftn-worker.controller';
import { FtnWorkerService } from './ftn-worker.service';
import { ConfigModule } from '@nestjs/config';
import { FtnCqrsModule } from '~/libs/@core/cqrs';
import { KafkaModule } from '~/libs/@core/kafka';
import { EventHandlers } from './event-handlers';
import { KafkaConsumerController } from './kafka-consumer.controller';

/**
 * The FtnWorkerModule is configurable through environment variables to act as
 * a specialized worker that only listens to specific topics.
 * 
 * Use environment variables to configure:
 * - KAFKA_ROLE=consumer - Set as consumer only
 * - KAFKA_TOPICS=USER_CREATED,ORDER_COMPLETED - Listen to specific topics only
 * - KAFKA_GROUP_ID=ftn-user-events-worker - Set unique consumer group
 * - KAFKA_INSTANCE_ID=user-events-worker-1 - Set unique instance ID
 */
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      // Load environment variables from .env file
      envFilePath: process.env.ENV_FILE || '.env',
    }),
    FtnCqrsModule,
    KafkaModule,
  ],
  controllers: [
    FtnWorkerController,
    KafkaConsumerController,
  ],
  providers: [
    FtnWorkerService,
    ...EventHandlers,
  ],
})
export class FtnWorkerModule {}
