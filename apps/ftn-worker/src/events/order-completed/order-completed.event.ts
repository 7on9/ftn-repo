import { BaseEvent } from '~/libs/@core/cqrs';

export class OrderCompletedEvent extends BaseEvent {
  constructor(
    public readonly orderId: string,
    correlationId?: string,
  ) {
    super(correlationId);
  }
}
