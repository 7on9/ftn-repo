/**
 * Type definitions for Kafka topic system
 */

/**
 * Represents a fully-qualified Kafka topic
 */
export interface KafkaTopic {
  /**
   * The fully qualified topic name (e.g., 'ftn.events.user.created')
   */
  name: string;
  
  /**
   * The topic category (events, commands, queries)
   */
  category: TopicType;
  
  /**
   * The domain entity this topic relates to
   */
  entity: EntityNames;
  
  /**
   * Metadata for the topic
   */
  metadata?: {
    description?: string;
    schema?: string;
  };
}

/**
 * Topic prefix for different applications
 */
export enum TopicPrefix {
  FTN = 'ftn',
}

/**
 * Topic types for different message categories
 */
export enum TopicType {
  EVENTS = 'events',
  COMMANDS = 'commands',
  QUERIES = 'queries',
}

/**
 * Entity names for domain objects
 */
export enum EntityNames {
  USER = 'user',
  ORDER = 'order',
  MEMBER = 'member',
  PAYMENT = 'payment',
}

/**
 * Topic mapping for each class name to its Kafka topic
 */
export interface TopicMappings {
  EventTopics: Record<string, string>;
  CommandTopics: Record<string, string>;
  QueryTopics: Record<string, string>;
}

/**
 * Interface for a class instance that can be mapped to a topic
 */
export interface TopicResolvable {
  constructor: { name: string };
}
