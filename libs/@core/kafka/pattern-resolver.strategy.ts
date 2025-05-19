import { CustomTransportStrategy, Server } from '@nestjs/microservices';
import { Injectable, Logger } from '@nestjs/common';
import { EventPatternService } from './event-pattern.service';
import { KafkaConfigService } from './kafka-config.service';
import { Consumer, Kafka, Producer } from 'kafkajs';
import { ConfigService } from '@nestjs/config';
import { TopicConfigService } from './topic-config.service';

/**
 * Custom transport strategy that intercepts and transforms our pattern strings
 * to use our centralized EventPatternService
 */
@Injectable()
export class PatternResolverStrategy extends Server implements CustomTransportStrategy {
  private kafka: Kafka;
  private consumer: Consumer;
  private producer: Producer;
  private readonly patternHandlers = new Map<string, Function>();
  protected readonly logger = new Logger(PatternResolverStrategy.name);

  constructor(
    private readonly eventPatternService: EventPatternService,
    private readonly kafkaConfigService: KafkaConfigService,
    private readonly configService: ConfigService,
    private readonly topicConfigService: TopicConfigService,
  ) {
    super();
    
    this.kafka = new Kafka({
      clientId: this.kafkaConfigService.instanceId,
      brokers: this.kafkaConfigService.brokers,
    });
    
    this.consumer = this.kafka.consumer({ 
      groupId: this.kafkaConfigService.consumerGroupId 
    });
    
    this.producer = this.kafka.producer();
  }

  /**
   * Start the consumer and subscribe to all topics that match our patterns
   */
  async listen(callback: () => void) {
    // Only connect to Kafka if this instance is configured as a consumer or both
    const role = this.kafkaConfigService.role;
    if (role !== 'consumer' && role !== 'both') {
      this.logger.log(`Instance configured as '${role}', skipping consumer setup`);
      callback();
      return;
    }
    
    await this.producer.connect();
    await this.consumer.connect();
    
    // Process each pattern and subscribe to corresponding topics
    const topicsToSubscribe = new Set<string>();
    
    this.messageHandlers.forEach((handler, pattern) => {
      if (typeof pattern === 'string' && pattern.startsWith('pattern:')) {
        // Extract components from our special pattern format
        const [_, type, entityName, action] = pattern.split(':');
        
        // Get the actual Kafka topic from our service
        const resolvedPattern = this.eventPatternService.getTopicPattern(
          type as any, 
          entityName,
          action
        );
        
        // Store the handler with the resolved pattern
        this.patternHandlers.set(resolvedPattern, handler);
        topicsToSubscribe.add(resolvedPattern);
      } else {
        // For standard patterns, just pass them through
        this.patternHandlers.set(pattern, handler);
        if (typeof pattern === 'string') {
          topicsToSubscribe.add(pattern);
        }
      }
    });
    
    // Filter topics based on KAFKA_TOPICS env var
    const subscribedTopicKeys = this.kafkaConfigService.subscribedTopics;
    
    let filteredTopics: string[];
    
    if (subscribedTopicKeys.length > 0) {
      // Filter topics based on configuration
      filteredTopics = this.topicConfigService.getTopicsByKeys(subscribedTopicKeys);
      this.logger.log(`Subscribing to configured topics: ${filteredTopics.join(', ')}`);
    } else {
      // Subscribe to all topics
      filteredTopics = Array.from(topicsToSubscribe);
      this.logger.log(`Subscribing to all topics: ${filteredTopics.join(', ')}`);
    }
    
    // Subscribe to filtered topics
    await Promise.all(
      filteredTopics.map(topic => {
        this.logger.log(`Subscribing to topic: ${topic}`);
        return this.consumer.subscribe({ topic, fromBeginning: false });
      })
    );
    
    // Set up the consumer to process messages
    await this.consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        const handler = this.patternHandlers.get(topic);
        
        if (handler) {
          const parsedMessage = message.value 
            ? JSON.parse(message.value.toString())
            : {};
          
          this.logger.debug(`Processing message from topic ${topic}`);  
          await handler(parsedMessage);
        }
      },
    });
    
    callback();
  }

  /**
   * Close connections when shutting down
   */
  async close() {
    const role = this.kafkaConfigService.role;
    if (role !== 'consumer' && role !== 'both') {
      return;
    }
    
    await this.consumer.disconnect();
    await this.producer.disconnect();
  }
  
  // Implement required methods from Server class
  public on(): any {}
  public unwrap(): any {}
}
