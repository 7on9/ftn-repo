import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaConfigService } from './kafka-config.service';
import { EventPatternService } from './event-pattern.service';
import { PatternResolverStrategy } from './pattern-resolver.strategy';
import { KafkaProducerService } from './kafka-producer.service';
import { TopicConfigService } from './topic-config.service';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'KAFKA_CLIENT',
        useFactory: (kafkaConfigService: KafkaConfigService) => ({
          transport: Transport.KAFKA,
          options: {
            client: {
              clientId: kafkaConfigService.instanceId,
              brokers: kafkaConfigService.brokers,
            },
            consumer: {
              groupId: kafkaConfigService.consumerGroupId,
            },
          },
        }),
        inject: [KafkaConfigService],
      },
    ]),
  ],
  providers: [
    KafkaConfigService,
    EventPatternService,
    PatternResolverStrategy,
    KafkaProducerService,
    TopicConfigService,
  ],
  exports: [
    ClientsModule,
    KafkaConfigService,
    EventPatternService,
    PatternResolverStrategy,
    KafkaProducerService,
    TopicConfigService,
  ],
})

export class KafkaModule {}
