/**
 * Production environment topic configuration
 * 
 * This file overrides default topic values for the production environment.
 */
import { createCustomTopicConfig } from '../topic-config';

// Production-specific topic configuration
export const PROD_TOPICS = createCustomTopicConfig({
  // Generally we keep the default names in production
  // Any custom overrides can be added here
});

export default PROD_TOPICS;
