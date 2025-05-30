import { Producer, Kafka } from 'kafkajs';
import { IProducer } from './producer.interface';
import { NSMessage } from '~/libs/common/enums/NSMessage';

export class KafkaProducer implements IProducer {
  private readonly kafka: Kafka;
  private readonly producer: Producer;
  private isConnected: boolean = false;

  constructor(broker: string) {
    this.kafka = new Kafka({
      brokers: [broker],
    });
    this.producer = this.kafka.producer({
      allowAutoTopicCreation: true,
    });

    this.producer.on(this.producer.events.CONNECT, async () => {
      console.log('Connected to Kafka.');
      this.isConnected = true;
    });

    this.producer.on(this.producer.events.DISCONNECT, async () => {
      console.log('Disconnected from Kafka.');
      this.isConnected = false;
      await this.connect();
    });
  }
  async healthCheck(): Promise<string> {
    const admin = this.kafka.admin();
    let healthResponse: any;
    try {
      await admin.connect();
      healthResponse = await admin.fetchTopicMetadata();
    } catch (error) {
      console.error('Kafka health check failed:', error);
      return 'Kafka health check failed';
    } finally {
      await admin.disconnect();
    }
    return JSON.stringify(healthResponse);
  }

  async produce(message: NSMessage.IMessageRecord) {
    await this.producer.send(message as any);
  }

  async connect() {
    if (this.isConnected) {
      return;
    }
    try {
      await this.producer.connect();
      this.isConnected = true;
    } catch (error) {
      console.error('Error initializing Kafka Producer:', error);
      await new Promise((resolve) => setTimeout(resolve, 5000));
      await this.connect();
    }
  }

  async disconnect() {
    try {
      await this.producer.disconnect();
    } catch (error) {
      console.error('Error disconnecting Kafka Producer:', error);
      throw error;
    }
  }
}
