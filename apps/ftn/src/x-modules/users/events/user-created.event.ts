import { BaseEvent } from '~/libs/@core/cqrs';

export class UserCreatedEvent extends BaseEvent {
  constructor(
    public readonly userId: string,
    correlationId?: string,
  ) {
    super(correlationId);
  }
}
