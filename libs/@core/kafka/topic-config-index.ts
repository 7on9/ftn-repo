/**
 * Topic configuration index
 * 
 * This file exports all available topic configurations and utilities.
 */
export * from './topic-config';
export { default as DEV_TOPICS } from './environments/dev-topics';
export { default as PROD_TOPICS } from './environments/prod-topics';
export { default as USER_WORKER_TOPICS } from './environments/user-worker-topics';

// Export a function to get the correct topics configuration based on environment
export function getTopicsForEnvironment(environment: string) {
  switch (environment.toLowerCase()) {
    case 'development':
    case 'dev':
      return require('./environments/dev-topics').default;
    case 'production':
    case 'prod':
      return require('./environments/prod-topics').default;
    case 'user-worker':
      return require('./environments/user-worker-topics').default;
    default:
      // Default to production topics
      return require('./environments/prod-topics').default;
  }
}
