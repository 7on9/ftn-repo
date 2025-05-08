import { Controller, Get } from '@nestjs/common';
import { FtnService } from './ftn.service';

@Controller()
export class FtnController {
  constructor(private readonly ftnService: FtnService) {}

  @Get()
  getHello(): string {
    return this.ftnService.getHello();
  }
}
