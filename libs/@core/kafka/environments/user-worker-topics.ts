/**
 * Example custom worker topic configuration
 * 
 * This file demonstrates how to create a custom configuration for a specialized worker.
 */
import { createCustomTopicConfig } from '../topic-config';

// Custom worker-specific topic configuration
export const USER_WORKER_TOPICS = createCustomTopicConfig({
  EVENT_TOPICS: {
    // Example: Use custom topics for a user-specific worker
    USER_CREATED: 'user-worker.events.user.created',
    USER_UPDATED: 'user-worker.events.user.updated',
    USER_DELETED: 'user-worker.events.user.deleted',
    ORDER_CREATED: '',
    ORDER_COMPLETED: '',
    ORDER_CANCELLED: '',
    PAYMENT_PROCESSED: '',
    PAYMENT_FAILED: ''
  }
});

export default USER_WORKER_TOPICS;
