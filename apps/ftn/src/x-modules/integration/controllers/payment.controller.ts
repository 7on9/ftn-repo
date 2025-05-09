import { DefController, DefGet } from '@libs/@core/decorator';

@DefController('dummies')
export class PaymentController {
  constructor(
  ) {}

  @DefGet('hello')
  hello() {
    return 'hello world';
  }
}
