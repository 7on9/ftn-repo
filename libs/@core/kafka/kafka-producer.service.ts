import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { EventPatternService } from './event-pattern.service';
import { FtnCommand, FtnEvent } from '../cqrs/base';
import { getTopicForInstance } from './topic-config';
import { KafkaConfigService } from './kafka-config.service';
import { TopicConfigService } from './topic-config.service';

@Injectable()
export class KafkaProducerService implements OnModuleInit {
  private readonly logger = new Logger(KafkaProducerService.name);
  
  constructor(
    @Inject('KAFKA_CLIENT') private kafkaClient: ClientKafka,
    private readonly eventPatternService: EventPatternService,
    private readonly kafkaConfigService: KafkaConfigService,
    private readonly topicConfigService: TopicConfigService,
  ) {}

  async onModuleInit() {
    const role = this.kafkaConfigService.role;
    if (role !== 'producer' && role !== 'both') {
      this.logger.log(`Instance configured as '${role}', skipping producer setup`);
      return;
    }
    
    // Ensure the client is connected before the application starts
    await this.kafkaClient.connect();
    this.logger.log('Kafka producer connected successfully');
  }

  /**
   * Send a message to a specific Kafka topic
   */
  async send<T>(topic: string, message: T, key?: string): Promise<void> {
    const role = this.kafkaConfigService.role;
    if (role !== 'producer' && role !== 'both') {
      this.logger.warn(`Cannot send message - instance configured as '${role}'`);
      return;
    }
    
    return this.kafkaClient.emit<any, any>(topic, {
      key,
      value: message,
      headers: {
        timestamp: Date.now().toString(),
      },
    }).toPromise();
  }

  /**
   * Send a command to Kafka using standardized topic
   */
  async sendCommand<T extends FtnCommand>(command: T): Promise<void> {
    // First check if we have a predefined topic for this command
    const topic = getTopicForInstance(command) || 
                  this.eventPatternService.getPatternForObject(command);
                  
    this.logger.debug(`Sending command to topic: ${topic}`);
    return this.send(topic, command, command.id);
  }

  /**
   * Send an event to Kafka using standardized topic
   */
  async sendEvent<T extends FtnEvent>(event: T): Promise<void> {
    // First check if we have a predefined topic for this event
    const topic = getTopicForInstance(event) || 
                  this.eventPatternService.getPatternForObject(event);
    
    this.logger.debug(`Sending event to topic: ${topic}`);              
    return this.send(topic, event, event.id);
  }

  /**
   * Send to a specific event topic from our centralized definitions
   */
  async sendToEventTopic<T>(topicKey: string, data: T, key?: string): Promise<void> {
    const topic = this.topicConfigService.getTopicByKey(topicKey);
    if (!topic) {
      throw new Error(`Topic key not found: ${topicKey}`);
    }
    return this.send(topic, data, key);
  }

  /**
   * Send to a specific command topic from our centralized definitions
   */
  async sendToCommandTopic<T>(topicKey: string, data: T, key?: string): Promise<void> {
    const topic = this.topicConfigService.getTopicByKey(topicKey);
    if (!topic) {
      throw new Error(`Topic key not found: ${topicKey}`);
    }
    return this.send(topic, data, key);
  }

  /**
   * Sequence events to ensure they are processed in order
   * @param events Array of events to send in sequence
   * @param entityId Identifier to use as the Kafka message key for sequencing
   */
  async sendSequencedEvents<T extends FtnEvent>(
    events: T[], 
    entityId: string
  ): Promise<void> {
    // Send events one after another to maintain order using the same key
    for (const event of events) {
      const topic = getTopicForInstance(event) || 
                    this.eventPatternService.getPatternForObject(event);
                    
      await this.send(topic, event, entityId);
    }
  }
}
