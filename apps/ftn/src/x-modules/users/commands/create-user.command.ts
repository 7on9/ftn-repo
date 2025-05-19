import { BaseCommand } from '~/libs/@core/cqrs';

export class CreateUserCommand extends BaseCommand {
  constructor(
    public readonly email: string,
    public readonly fullName: string,
    public readonly password: string,
  ) {
    super();
  }
}
