import { DefController, DefGet } from '@libs/@core/decorator';
import { PublicService } from '../services';

@DefController('')
export class PublicController {
  constructor(private readonly publicService: PublicService) {}

  @DefGet('example')
  create() {
    return this.publicService.example();
  }
}
