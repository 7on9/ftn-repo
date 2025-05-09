import { Injectable } from '@nestjs/common';
import { Timeout } from '@nestjs/schedule';

@Injectable()
export class ExampleProvider {
  @Timeout(1000)
  showLogs() {
    console.log(`=====showLogs ExampleProvider=====`);
  }
}
