import { Injectable, OnApplicationShutdown } from '@nestjs/common';
import { KafkaProducer } from './kafka-producer';
import { IProducer } from './producer.interface';
import { NSMessage } from '~/libs/common/enums/NSMessage';

@Injectable()
export class MessagingProducerService implements OnApplicationShutdown {
  private readonly producers = new Map<string, IProducer>();
  private readonly brokerUrl: string;

  constructor() {
    try {
      // this.brokerUrl = this.configService.kafkaBroker;
      this.brokerUrl = "localhost:9092"; // Fallback for testing purposes
    } catch (error) {
      console.error(
        'Error getting configuration on message producer service:',
        error
      );
      throw error;
    }
  }

  async produce(message: NSMessage.IMessageRecord) {
    const producer = await this.getProducer(message.topic, this.brokerUrl);
    console.log(`Producing message to topic: ${message.topic}`);
    if (!producer) {
      throw new Error(`No producer available for topic: ${message.topic}`);
    }
    await producer.produce(message);
  }

  async disconnect() {
    for (const producer of this.producers.values()) {
      await producer.disconnect();
    }
  }

  private async getProducer(topic: string, broker: string) {
    let producer = this.producers.get(topic);
    if (!producer) {
      producer = new KafkaProducer(broker);
      try {
        await producer.connect();
        // Optionally, you can create the topic if it doesn't exist
        // await (producer as KafkaProducer).createTopic(topic);
        this.producers.set(topic, producer);
        console.log(`Producer connected for topic: ${topic}`);
      } catch (error) {
        console.error(`Error connecting producer for topic ${topic}:`, error);
      }
    }
    return producer;
  }

  async healthCheck() {
    const topicsHealth: Array<any> = [];
    for (const producer of this.producers.values()) {
      const topicHealth = await producer.healthCheck();
      topicsHealth.push(topicHealth);
    }
    return topicsHealth;
  }

  async onApplicationShutdown() {
    await this.disconnect();
  }
}
