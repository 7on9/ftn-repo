/**
 * Development environment topic configuration
 * 
 * This file overrides default topic values for the development environment.
 */
import { createCustomTopicConfig } from '../topic-config';

// Development-specific topic configuration
export const DEV_TOPICS = createCustomTopicConfig({
  EVENT_TOPICS: {
    // Override with dev-specific topics if needed
    USER_CREATED: 'dev.events.user.created',
    ORDER_CREATED: 'dev.events.order.created',
    USER_UPDATED: '',
    USER_DELETED: '',
    ORDER_COMPLETED: '',
    ORDER_CANCELLED: '',
    PAYMENT_PROCESSED: '',
    PAYMENT_FAILED: ''
  },
  COMMAND_TOPICS: {
    // Override with dev-specific topics if needed
    PROCESS_ORDER: 'dev.commands.order.process',
    CANCEL_ORDER: '',
    CREATE_USER: '',
    UPDATE_USER: '',
    PROCESS_PAYMENT: ''
  }
});

export default DEV_TOPICS;
