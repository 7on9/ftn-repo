import { Injectable } from '@nestjs/common';

@Injectable()
export class FtnService {
  getHello(): string {
    return 'Hello World!';
  }
}
