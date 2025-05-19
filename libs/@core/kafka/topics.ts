/**
 * Centralized Kafka topic definitions
 * This file serves as the single source of truth for all Kafka topics used in the application.
 */
import { ConfigService } from '@nestjs/config';
import { TopicPrefix, TopicType, EntityNames, TopicMappings, KafkaTopic } from './topic.types';

/**
 * Get environment variable or default value for a topic
 * @param configService Config service instance
 * @param envKey Environment variable key
 * @param defaultValue Default value if env var is not set
 */
export function getTopicFromEnv(
  configService: ConfigService,
  envKey: string,
  defaultValue: string
): string {
  return configService.get<string>(envKey, defaultValue);
}

// Fallback static enums for reference 
export enum EventTopics {
  USER_CREATED = 'ftn.events.user.created',
  USER_UPDATED = 'ftn.events.user.updated',
  USER_DELETED = 'ftn.events.user.deleted',
  
  ORDER_CREATED = 'ftn.events.order.created',
  ORDER_COMPLETED = 'ftn.events.order.completed',
  ORDER_CANCELLED = 'ftn.events.order.cancelled',
  
  PAYMENT_PROCESSED = 'ftn.events.payment.processed',
  PAYMENT_FAILED = 'ftn.events.payment.failed',
}

export enum CommandTopics {
  PROCESS_ORDER = 'ftn.commands.order.process',
  CANCEL_ORDER = 'ftn.commands.order.cancel',
  
  CREATE_USER = 'ftn.commands.user.create',
  UPDATE_USER = 'ftn.commands.user.update',
  
  PROCESS_PAYMENT = 'ftn.commands.payment.process',
}

export enum QueryTopics {
  GET_USER = 'ftn.queries.user.get',
  GET_ORDER = 'ftn.queries.order.get',
  GET_ORDERS_BY_USER = 'ftn.queries.order.get-by-user',
}

/**
 * Topic builder helper function to create standardized topic names
 * 
 * @param prefix Application prefix (e.g., 'ftn')
 * @param type Topic type (events, commands, queries)
 * @param entity Domain entity name
 * @param action Action name for the entity
 */
export function buildTopic(
  prefix: TopicPrefix | string, 
  type: TopicType | string, 
  entity: EntityNames | string, 
  action: string
): string {
  return `${prefix}.${type}.${entity}.${action}`;
}

/**
 * Get topic from a class instance using the ConfigService
 * 
 * @param instance Class instance (event or command)
 * @param topicMappings Topic mappings from createTopicEnums
 * @returns Associated topic or null if not found
 */
export function getTopicForInstance(
  instance: any, 
  topicMappings?: TopicMappings
): string | null {
  const className = instance.constructor.name;
  
  // If we have dynamic topic mappings, use them
  if (topicMappings) {
    // Check if it's an event
    if (className.endsWith('Event')) {
      const eventKey = className.replace('Event', '').toUpperCase();
      if (topicMappings.EventTopics[eventKey]) {
        return topicMappings.EventTopics[eventKey];
      }
    }
    
    // Check if it's a command
    if (className.endsWith('Command')) {
      const commandKey = className.replace('Command', '').toUpperCase();
      if (topicMappings.CommandTopics[commandKey]) {
        return topicMappings.CommandTopics[commandKey];
      }
    }
  }
  
  // Fallback to static mapping
  const staticTopicMap = {
    // Events
    'UserCreatedEvent': EventTopics.USER_CREATED,
    'UserUpdatedEvent': EventTopics.USER_UPDATED,
    'OrderCompletedEvent': EventTopics.ORDER_COMPLETED,
    'OrderCreatedEvent': EventTopics.ORDER_CREATED,
    'PaymentProcessedEvent': EventTopics.PAYMENT_PROCESSED,
    
    // Commands
    'ProcessOrderCommand': CommandTopics.PROCESS_ORDER,
    'CancelOrderCommand': CommandTopics.CANCEL_ORDER,
    'CreateUserCommand': CommandTopics.CREATE_USER,
    'UpdateUserCommand': CommandTopics.UPDATE_USER,
  };
  
  return staticTopicMap[className] || null;
}

/**
 * Mapping from class names to topic names
 */
export const ClassToTopicMap: Record<string, string> = {
  'UserCreatedEvent': EventTopics.USER_CREATED,
  'UserUpdatedEvent': EventTopics.USER_UPDATED,
  'UserDeletedEvent': EventTopics.USER_DELETED,
  'OrderCreatedEvent': EventTopics.ORDER_CREATED,
  'OrderCompletedEvent': EventTopics.ORDER_COMPLETED,
  'OrderCancelledEvent': EventTopics.ORDER_CANCELLED,
  'PaymentProcessedEvent': EventTopics.PAYMENT_PROCESSED,
  'PaymentFailedEvent': EventTopics.PAYMENT_FAILED,
  
  'ProcessOrderCommand': CommandTopics.PROCESS_ORDER,
  'CancelOrderCommand': CommandTopics.CANCEL_ORDER,
  'CreateUserCommand': CommandTopics.CREATE_USER,
  'UpdateUserCommand': CommandTopics.UPDATE_USER,
  'ProcessPaymentCommand': CommandTopics.PROCESS_PAYMENT,
};

/**
 * Get all topic names from the provided topic mappings
 */
export function getAllTopics(topicMappings: TopicMappings): string[] {
  return [
    ...Object.values(topicMappings.EventTopics),
    ...Object.values(topicMappings.CommandTopics),
    ...Object.values(topicMappings.QueryTopics),
  ];
}

/**
 * Get topic names based on topic keys from KAFKA_TOPICS env var
 * 
 * @param topicKeys Array of topic keys (e.g., ["USER_CREATED", "ORDER_COMPLETED"])
 * @param topicMappings All available topics from environment
 * @returns Array of resolved topic names to subscribe to
 */
export function getTopicsByKeys(topicKeys: string[], topicMappings: TopicMappings): string[] {
  if (!topicKeys || topicKeys.length === 0) {
    return getAllTopics(topicMappings);
  }
  
  const topics: string[] = [];
  
  for (const key of topicKeys) {
    // Check event topics
    if (topicMappings.EventTopics[key]) {
      topics.push(topicMappings.EventTopics[key]);
      continue;
    }
    
    // Check command topics
    if (topicMappings.CommandTopics[key]) {
      topics.push(topicMappings.CommandTopics[key]);
      continue;
    }
    
    // Check query topics
    if (topicMappings.QueryTopics[key]) {
      topics.push(topicMappings.QueryTopics[key]);
      continue;
    }
    
    // If not found in mappings, check if it's a literal topic name
    if (key.includes('.')) {
      topics.push(key);
    }
  }
  
  return topics;
}
