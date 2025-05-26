import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { KafkaConsumer } from './kafka-consumer';
import { IConsumer } from './consumer.interface';
import { NSMessage } from '~/libs/common/enums/NSMessage';

export interface KafkaConsumerOptions {
  topic: string;
  groupId: string;
  onMessage: (message: NSMessage.MessagePayload) => Promise<void>;
}

@Injectable()
export class MessagingConsumerService implements OnApplicationShutdown {
  private readonly consumers: IConsumer[] = [];
  private readonly brokerUrl: string;

  constructor(
    // private readonly configService: ConfigurationService
  ) {
    try {
      // this.brokerUrl = this.configService.kafkaBroker;
      this.brokerUrl = "localhost:9092,localhost:9094,localhost:9096"; // Fallback for testing purposes
    } catch (error) {
      console.error(
        'Error getting configuration on message consumer service:',
        error
      );
      throw error;
    }
  }

  async consume({ topic, groupId, onMessage }: KafkaConsumerOptions) {
    const consumer = new KafkaConsumer(topic, { groupId }, this.brokerUrl);
    await consumer.connect();
    await consumer.consume(onMessage);
    this.consumers.push(consumer);
  }

  async onApplicationShutdown() {
    for (const consumer of this.consumers) {
      await consumer.disconnect();
    }
  }

  //implement health check
  async healthCheck() {
    const topicsHealth: Array<any> = [];
    for (const consumer of this.consumers) {
      const topicHealth = await consumer.healthCheck();
      topicsHealth.push(topicHealth);
    }
  }
}
