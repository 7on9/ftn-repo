import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { 
  DEFAULT_TOPICS, 
  getTopicsForEnvironment, 
  getTopicsByKeys, 
  buildTopic 
} from './topic-config-index';

/**
 * Service to manage Kafka topics using file-based configuration
 * instead of environment variables.
 */
@Injectable()
export class TopicConfigService {
  private topicConfig;

  constructor(private configService: ConfigService) {
    // Get the environment from config or default to 'development'
    const environment = this.configService.get<string>('NODE_ENV', 'development');
    
    // Allow override of topic configuration for specialized workers
    const topicConfigType = this.configService.get<string>('KAFKA_TOPIC_CONFIG', environment);
    
    // Load the appropriate topic configuration
    this.topicConfig = getTopicsForEnvironment(topicConfigType);
  }

  /**
   * Get all event topics
   */
  get eventTopics() {
    return this.topicConfig.EVENT_TOPICS;
  }

  /**
   * Get all command topics
   */
  get commandTopics() {
    return this.topicConfig.COMMAND_TOPICS;
  }

  /**
   * Get all query topics
   */
  get queryTopics() {
    return this.topicConfig.QUERY_TOPICS;
  }

  /**
   * Get topic by key (e.g., 'USER_CREATED')
   */
  getTopicByKey(key: string): string | null {
    return (
      this.topicConfig.EVENT_TOPICS[key] ||
      this.topicConfig.COMMAND_TOPICS[key] ||
      this.topicConfig.QUERY_TOPICS[key] ||
      null
    );
  }

  /**
   * Get topics by keys
   */
  getTopicsByKeys(keys: string[]): string[] {
    return getTopicsByKeys(keys, this.topicConfig);
  }

  /**
   * Get topics to subscribe to based on KAFKA_TOPICS env var
   */
  getSubscribedTopics(): string[] {
    const topicKeysStr = this.configService.get<string>('KAFKA_TOPICS', '');
    if (!topicKeysStr) {
      // If no topics specified, return all topics
      return [
        ...Object.values(this.topicConfig.EVENT_TOPICS) as string[],
        ...Object.values(this.topicConfig.COMMAND_TOPICS) as string[],
        ...Object.values(this.topicConfig.QUERY_TOPICS) as string[],
      ];
    }
    
    const topicKeys = topicKeysStr.split(',').map(k => k.trim());
    return this.getTopicsByKeys(topicKeys);
  }

  /**
   * Build a custom topic using the standard pattern
   */
  buildTopic(type: string, entity: string, action: string): string {
    const prefix = this.configService.get<string>('KAFKA_TOPIC_PREFIX', 'ftn');
    return buildTopic(prefix, type, entity, action);
  }
}
