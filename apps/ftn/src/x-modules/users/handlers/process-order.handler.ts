import { CommandHandler, EventBus, ICommandHandler } from '@nestjs/cqrs';
import { Logger } from '@nestjs/common';
import { ProcessOrderCommand } from '../commands/process-order.command';
import { KafkaProducerService } from '~/libs/@core/kafka';

@CommandHandler(ProcessOrderCommand)
export class ProcessOrderCommandHandler
  implements ICommandHandler<ProcessOrderCommand> {
  private readonly logger = new Logger(ProcessOrderCommandHandler.name);

  constructor(
    private readonly eventBus: EventBus,
    private readonly kafkaProducer: KafkaProducerService,
  ) {}

  async execute(command: ProcessOrderCommand): Promise<void> {
    this.logger.debug(`Processing order with ID: ${command.orderId} for user: ${command.userId}`);
    
    try {
      // For API calls, we'll dispatch this to Kafka for async processing
      await this.kafkaProducer.send(
        'ftn.commands.ProcessOrderCommand',
        command,
        command.id
      );
      
      this.logger.log(`Order processing request sent to worker: ${command.orderId}`);
    } catch (error) {
      this.logger.error(`Failed to process order ${command.orderId}`, error.stack);
      throw error;
    }
  }
}
