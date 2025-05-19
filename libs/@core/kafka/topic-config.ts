/**
 * Kafka topics configuration file
 * 
 * This file contains centralized topic definitions that can be customized
 * for different environments without using environment variables.
 */

// Topic prefix used across all topics
export const TOPIC_PREFIX = 'ftn';

// Topic types
export const TOPIC_TYPES = {
  EVENTS: 'events',
  COMMANDS: 'commands',
  QUERIES: 'queries',
};

// Default topics configuration that can be imported and used by workers
export const DEFAULT_TOPICS = {
  // Event topics 
  EVENT_TOPICS: {
    USER_CREATED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.user.created`,
    USER_UPDATED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.user.updated`,
    USER_DELETED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.user.deleted`,
    
    ORDER_CREATED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.order.created`,
    ORDER_COMPLETED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.order.completed`,
    ORDER_CANCELLED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.order.cancelled`,
    
    PAYMENT_PROCESSED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.payment.processed`,
    PAYMENT_FAILED: `${TOPIC_PREFIX}.${TOPIC_TYPES.EVENTS}.payment.failed`,
  },
  
  // Command topics
  COMMAND_TOPICS: {
    PROCESS_ORDER: `${TOPIC_PREFIX}.${TOPIC_TYPES.COMMANDS}.order.process`,
    CANCEL_ORDER: `${TOPIC_PREFIX}.${TOPIC_TYPES.COMMANDS}.order.cancel`,
    
    CREATE_USER: `${TOPIC_PREFIX}.${TOPIC_TYPES.COMMANDS}.user.create`,
    UPDATE_USER: `${TOPIC_PREFIX}.${TOPIC_TYPES.COMMANDS}.user.update`,
    
    PROCESS_PAYMENT: `${TOPIC_PREFIX}.${TOPIC_TYPES.COMMANDS}.payment.process`,
  },
  
  // Query topics
  QUERY_TOPICS: {
    GET_USER: `${TOPIC_PREFIX}.${TOPIC_TYPES.QUERIES}.user.get`,
    GET_ORDER: `${TOPIC_PREFIX}.${TOPIC_TYPES.QUERIES}.order.get`,
    GET_ORDERS_BY_USER: `${TOPIC_PREFIX}.${TOPIC_TYPES.QUERIES}.order.get-by-user`,
  }
};

// Function to create a custom topic configuration by overriding default values
export function createCustomTopicConfig(customConfig: Partial<typeof DEFAULT_TOPICS> = {}) {
  return {
    ...DEFAULT_TOPICS,
    EVENT_TOPICS: {
      ...DEFAULT_TOPICS.EVENT_TOPICS,
      ...(customConfig.EVENT_TOPICS || {}),
    },
    COMMAND_TOPICS: {
      ...DEFAULT_TOPICS.COMMAND_TOPICS,
      ...(customConfig.COMMAND_TOPICS || {}),
    },
    QUERY_TOPICS: {
      ...DEFAULT_TOPICS.QUERY_TOPICS,
      ...(customConfig.QUERY_TOPICS || {}),
    },
  };
}

// Export function to get all topic values
export function getAllTopics(topicConfig = DEFAULT_TOPICS) {
  return [
    ...Object.values(topicConfig.EVENT_TOPICS),
    ...Object.values(topicConfig.COMMAND_TOPICS),
    ...Object.values(topicConfig.QUERY_TOPICS),
  ];
}

// Export function to get topics by keys
export function getTopicsByKeys(topicKeys: string[], topicConfig = DEFAULT_TOPICS) {
  if (!topicKeys || topicKeys.length === 0) {
    return getAllTopics(topicConfig);
  }
  
  const result: string[] = [];
  
  for (const key of topicKeys) {
    // Check in each topic collection
    if (topicConfig.EVENT_TOPICS[key]) {
      result.push(topicConfig.EVENT_TOPICS[key]);
    } else if (topicConfig.COMMAND_TOPICS[key]) {
      result.push(topicConfig.COMMAND_TOPICS[key]);
    } else if (topicConfig.QUERY_TOPICS[key]) {
      result.push(topicConfig.QUERY_TOPICS[key]);
    } else if (key.includes('.')) {
      // If it's a literal topic name
      result.push(key);
    }
  }
  
  return result;
}

// Helper for creating a topic string
export function buildTopic(
  prefix: string = TOPIC_PREFIX,
  type: string,
  entity: string,
  action: string
): string {
  return `${prefix}.${type}.${entity}.${action}`;
}

// Mapping from class names to topic keys
export const CLASS_TO_TOPIC_KEY: Record<string, string> = {
  // Events
  'UserCreatedEvent': 'USER_CREATED',
  'UserUpdatedEvent': 'USER_UPDATED',
  'UserDeletedEvent': 'USER_DELETED',
  'OrderCreatedEvent': 'ORDER_CREATED',
  'OrderCompletedEvent': 'ORDER_COMPLETED',
  'OrderCancelledEvent': 'ORDER_CANCELLED',
  'PaymentProcessedEvent': 'PAYMENT_PROCESSED',
  'PaymentFailedEvent': 'PAYMENT_FAILED',
  
  // Commands
  'ProcessOrderCommand': 'PROCESS_ORDER',
  'CancelOrderCommand': 'CANCEL_ORDER',
  'CreateUserCommand': 'CREATE_USER',
  'UpdateUserCommand': 'UPDATE_USER',
  'ProcessPaymentCommand': 'PROCESS_PAYMENT',
};

// Function to get topic for a class instance
export function getTopicForInstance(
  instance: any,
  topicConfig = DEFAULT_TOPICS
): string | null {
  const className = instance.constructor.name;
  const topicKey = CLASS_TO_TOPIC_KEY[className];
  
  if (!topicKey) {
    return null;
  }
  
  // Check where the topic belongs
  if (className.endsWith('Event')) {
    return topicConfig.EVENT_TOPICS[topicKey] || null;
  } else if (className.endsWith('Command')) {
    return topicConfig.COMMAND_TOPICS[topicKey] || null;
  } else if (className.endsWith('Query')) {
    return topicConfig.QUERY_TOPICS[topicKey] || null;
  }
  
  return null;
}
