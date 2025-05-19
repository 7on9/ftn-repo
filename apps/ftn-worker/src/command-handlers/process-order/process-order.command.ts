import { BaseCommand } from '~/libs/@core/cqrs';

export class ProcessOrderCommand extends BaseCommand {
  constructor(
    public readonly orderId: string,
    public readonly userId: string,
  ) {
    super();
  }
}
