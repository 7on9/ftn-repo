import { HttpStatus, Type } from '@nestjs/common';

export type TRepoClass = { getConnectionName: any; new (...args: any[]): any };
export type TClass = { new (...args: any[]): any };

export class MethodGetOptions {
  summary?: string = '';
  statusCode?: HttpStatus = HttpStatus.OK;
  responseType?: Type<unknown> | Function | [Function] | string;
}

export class MethodOptions extends MethodGetOptions {
  bodyType?: Type<unknown> | Function | [Function] | string;
}
