import { Injectable } from '@nestjs/common';

@Injectable()
export class FtnWorkerService {
  getHello(): string {
    return 'Hello World!';
  }
}
