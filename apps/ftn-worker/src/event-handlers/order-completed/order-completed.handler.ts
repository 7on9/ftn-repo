import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { OrderCompletedEvent } from '../../events/order-completed/order-completed.event';
import { Logger } from '@nestjs/common';

@EventsHandler(OrderCompletedEvent)
export class OrderCompletedEventHandler implements IEventHandler<OrderCompletedEvent> {
  private readonly logger = new Logger(OrderCompletedEventHandler.name);

  handle(event: OrderCompletedEvent): void {
    this.logger.log(`Order completed event received: ${JSON.stringify(event)}`);

    // Implement follow-up actions for completed orders
    // For example: send confirmation email, update inventory, etc.
    
    this.logger.log(`Processing completed for order ID: ${event.orderId}`);
  }
}
