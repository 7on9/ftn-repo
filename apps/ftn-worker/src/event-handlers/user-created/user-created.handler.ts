import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UserCreatedEvent } from '../../events/user-created/user-created.event';
import { Logger } from '@nestjs/common';

@EventsHandler(UserCreatedEvent)
export class UserCreatedEventHandler implements IEventHandler<UserCreatedEvent> {
  private readonly logger = new Logger(UserCreatedEventHandler.name);

  handle(event: UserCreatedEvent): void {
    this.logger.log(`User created event received: ${JSON.stringify(event)}`);

    // Implement any async processing for a newly created user
    // For example: send welcome email, set up initial user data, etc.
    
    this.logger.log(`Processing completed for user ID: ${event.userId}`);
  }
}
