import { EventPattern as NestEventPattern } from '@nestjs/microservices';
import { EventPatternTypes } from './event-pattern.service';
import { 
  EventTopics, 
  CommandTopics, 
  QueryTopics,
  ClassToTopicMap
} from './topics';

/**
 * Enhanced EventPattern decorator that works with our centralized pattern system
 * 
 * @param type The type of message pattern (command, event, query)
 * @param entityName The entity or domain model name
 * @param action Optional specific action
 */
export function EventPattern(
  type: EventPatternTypes,
  entityName: string, 
  action?: string
): MethodDecorator {
  // This will be resolved at runtime through our pattern service
  // Format: {type}.{appPrefix}.{entityName}.{action?}
  const pattern = `pattern:${type}:${entityName}${action ? `:${action}` : ''}`;
  
  return NestEventPattern(pattern);
}

/**
 * Decorator specifically for Command handlers that uses predefined topics
 */
export function CommandPattern(commandName: string): MethodDecorator {
  // Check if we have a predefined topic for this command
  const topic = ClassToTopicMap[`${commandName}Command`] || 
                CommandTopics[commandName.toUpperCase() as keyof typeof CommandTopics];
  
  if (topic) {
    return NestEventPattern(topic);
  }
  
  // Fall back to the pattern resolver
  return EventPattern(EventPatternTypes.COMMAND, commandName);
}

/**
 * Decorator specifically for Event handlers that uses predefined topics
 */
export function EventConsumerPattern(eventName: string): MethodDecorator {
  // Check if we have a predefined topic for this event
  const topic = ClassToTopicMap[`${eventName}Event`] || 
                EventTopics[eventName.toUpperCase() as keyof typeof EventTopics];
  
  if (topic) {
    return NestEventPattern(topic);
  }
  
  // Fall back to the pattern resolver
  return EventPattern(EventPatternTypes.EVENT, eventName);
}

/**
 * Decorator specifically for Query handlers that uses predefined topics
 */
export function QueryPattern(queryName: string): MethodDecorator {
  // Check if we have a predefined topic for this query
  const topic = ClassToTopicMap[`${queryName}Query`] || 
                QueryTopics[queryName.toUpperCase() as keyof typeof QueryTopics];
  
  if (topic) {
    return NestEventPattern(topic);
  }
  
  // Fall back to the pattern resolver
  return EventPattern(EventPatternTypes.QUERY, queryName);
}

/**
 * Constants-based EventPattern decorators
 * These are more explicit and avoid any runtime resolution
 */
export const EventPatterns = {
  // User events
  UserCreated: () => NestEventPattern(EventTopics.USER_CREATED),
  UserUpdated: () => NestEventPattern(EventTopics.USER_UPDATED),
  UserDeleted: () => NestEventPattern(EventTopics.USER_DELETED),
  
  // Order events
  OrderCreated: () => NestEventPattern(EventTopics.ORDER_CREATED),
  OrderCompleted: () => NestEventPattern(EventTopics.ORDER_COMPLETED),
  OrderCancelled: () => NestEventPattern(EventTopics.ORDER_CANCELLED),
  
  // Payment events
  PaymentProcessed: () => NestEventPattern(EventTopics.PAYMENT_PROCESSED),
  PaymentFailed: () => NestEventPattern(EventTopics.PAYMENT_FAILED),
};

/**
 * Constants-based CommandPattern decorators
 * These are more explicit and avoid any runtime resolution
 */
export const CommandPatterns = {
  // Order commands
  ProcessOrder: () => NestEventPattern(CommandTopics.PROCESS_ORDER),
  CancelOrder: () => NestEventPattern(CommandTopics.CANCEL_ORDER),
  
  // User commands
  CreateUser: () => NestEventPattern(CommandTopics.CREATE_USER),
  UpdateUser: () => NestEventPattern(CommandTopics.UPDATE_USER),
  
  // Payment commands
  ProcessPayment: () => NestEventPattern(CommandTopics.PROCESS_PAYMENT),
};
