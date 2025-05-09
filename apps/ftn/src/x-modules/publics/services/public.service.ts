import { Injectable } from '@nestjs/common';

@Injectable()
export class PublicService {
  constructor() {}

  async example() {
    return {
      message: 'Hello from PublicService',
    };
  }
}
