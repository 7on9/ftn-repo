import { Controller } from '@nestjs/common';
import { Payload } from '@nestjs/microservices';
import { CommandBus, EventBus } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { UserCreatedEvent } from './events/user-created/user-created.event';
import { OrderCompletedEvent } from './events/order-completed/order-completed.event';
import { ProcessOrderCommand } from './command-handlers/process-order/process-order.command';
import { 
  CommandPattern, 
  EventConsumerPattern,
  EventPatterns,
  CommandPatterns
} from '~/libs/@core/kafka';

@Controller()
export class KafkaConsumerController {
  private readonly logger = new Logger(KafkaConsumerController.name);

  constructor(
    private readonly commandBus: CommandBus,
    private readonly eventBus: EventBus,
  ) {}

  /**
   * Using the constant-based decorator for improved safety and centralization
   */
  @EventPatterns.UserCreated()
  async handleUserCreatedEvent(@Payload() message: any): Promise<void> {
    try {
      this.logger.debug(`Received user created event: ${JSON.stringify(message.value)}`);
      
      const { userId, id, timestamp, correlationId } = message.value;
      
      // Reconstruct the event
      const event = new UserCreatedEvent(userId, correlationId);
      
      // Pass to the local event bus for processing
      this.eventBus.publish(event);
    } catch (error) {
      this.logger.error('Error handling user created event', error.stack);
    }
  }

  @EventPatterns.OrderCompleted()
  async handleOrderCompletedEvent(@Payload() message: any): Promise<void> {
    try {
      this.logger.debug(`Received order completed event: ${JSON.stringify(message.value)}`);
      
      const { orderId, id, timestamp, correlationId } = message.value;
      
      // Reconstruct the event
      const event = new OrderCompletedEvent(orderId, correlationId);
      
      // Pass to the local event bus for processing
      this.eventBus.publish(event);
    } catch (error) {
      this.logger.error('Error handling order completed event', error.stack);
    }
  }

  @CommandPatterns.ProcessOrder()
  async handleProcessOrderCommand(@Payload() message: any): Promise<void> {
    try {
      this.logger.debug(`Received process order command: ${JSON.stringify(message.value)}`);
      
      const { orderId, userId, id, timestamp } = message.value;
      
      // Reconstruct the command
      const command = new ProcessOrderCommand(orderId, userId);
      
      // Pass to the command bus for processing
      await this.commandBus.execute(command);
    } catch (error) {
      this.logger.error('Error handling process order command', error.stack);
    }
  }
}
