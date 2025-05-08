import { Controller, Get } from '@nestjs/common';
import { FtnWorkerService } from './ftn-worker.service';

@Controller()
export class FtnWorkerController {
  constructor(private readonly ftnWorkerService: FtnWorkerService) {}

  @Get()
  getHello(): string {
    return this.ftnWorkerService.getHello();
  }
}
