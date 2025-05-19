import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class KafkaConfigService {
  constructor(private configService: ConfigService) {}

  get brokers(): string[] {
    const brokerString = this.configService.get<string>('KAFKA_BROKERS', 'localhost:9092');
    return brokerString.split(',');
  }

  get consumerGroupId(): string {
    return this.configService.get<string>('KAFKA_GROUP_ID', 'ftn-consumer-group');
  }
  
  /**
   * Gets list of topics this worker should listen to from KAFKA_TOPICS env var
   * Format: comma-separated list of topic keys (e.g. "USER_CREATED,ORDER_COMPLETED")
   */
  get subscribedTopics(): string[] {
    const topicsString = this.configService.get<string>('KAFKA_TOPICS', '');
    return topicsString ? topicsString.split(',').map(t => t.trim()) : [];
  }
  
  /**
   * Gets the worker instance role (producer, consumer, or both)
   */
  get role(): 'producer' | 'consumer' | 'both' {
    const role = this.configService.get<string>('KAFKA_ROLE', 'both');
    return (role as 'producer' | 'consumer' | 'both');
  }
  
  /**
   * Gets if auto topic creation is enabled
   */
  get autoCreateTopics(): boolean {
    return this.configService.get<boolean>('KAFKA_AUTO_CREATE_TOPICS', true);
  }
  
  /**
   * Gets the instance ID for this worker
   */
  get instanceId(): string {
    return this.configService.get<string>('KAFKA_INSTANCE_ID', `ftn-worker-${Date.now()}`);
  }
}
