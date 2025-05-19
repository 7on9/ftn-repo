import { UserCreatedEventHandler } from './user-created/user-created.handler';
import { OrderCompletedEventHandler } from './order-completed/order-completed.handler';

export const EventHandlers = [
  UserCreatedEventHandler,
  OrderCompletedEventHandler,
];
