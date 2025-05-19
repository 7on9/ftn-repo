import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { CreateUserCommand } from '../commands/create-user.command';
import { UserCreatedEvent } from '../events/user-created.event';
import { KafkaProducerService } from '~/libs/@core/kafka';

@CommandHandler(CreateUserCommand)
export class CreateUserCommandHandler
  implements ICommandHandler<CreateUserCommand> {
  private readonly logger = new Logger(CreateUserCommandHandler.name);

  constructor(
    private readonly eventBus: EventBus,
    private readonly kafkaProducer: KafkaProducerService,
  ) {}

  async execute(command: CreateUserCommand): Promise<any> {
    this.logger.debug(`Creating user with email: ${command.email}`);
    
    try {
      // Here you'd implement actual user creation logic with your database
      // This is just a placeholder for demonstration
      
      const user = {
        id: this.generateId(),
        email: command.email,
        fullName: command.fullName,
        createdAt: new Date(),
      };
      
      // Publish UserCreatedEvent to the event bus (will be handled locally and sent to Kafka)
      const userCreatedEvent = new UserCreatedEvent(
        user.id,
        command.id, // Using command ID as correlation ID
      );
      
      this.eventBus.publish(userCreatedEvent);
      
      // Send the process order command directly to Kafka for the worker to handle
      await this.kafkaProducer.send(
        'ftn.commands.ProcessOrderCommand',
        {
          userId: user.id,
          orderId: 'sample-order-id',
          // Additional command properties...
        },
      );
      
      this.logger.log(`User ${user.id} created successfully`);
      
      return user;
    } catch (error) {
      this.logger.error(`Failed to create user with email ${command.email}`, error.stack);
      throw error;
    }
  }
  
  private generateId(): string {
    return Date.now().toString(36) + Math.random().toString(36).substring(2, 9);
  }
}
