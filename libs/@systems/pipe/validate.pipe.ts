import {
  ArgumentMetadata,
  BadRequestException,
  HttpException,
  ValidationPipe,
} from '@nestjs/common';

class ValidateException extends HttpException {
  public messages: {
    [key: string]: string;
  };
  constructor(messages: { [key: string]: string }, status: number) {
    super(JSON.stringify(messages), status);
    this.messages = messages;
  }
}

export interface IErrorResponse {
  message?: string[];
}

export class ValidatePipe extends ValidationPipe {
  public async transform(value: any, metadata: ArgumentMetadata) {
    try {
      return await super.transform(value, metadata);
    } catch (err) {
      if (err instanceof BadRequestException) {
        const response = err.getResponse() as IErrorResponse;
        if (response && response.message) {
          // if(response.message.length > 0) {
          //     throw new BadRequestException(response.message[0])
          // }
          const messages = {};
          response.message.forEach(item => {
            const arr = item.split(/ /g);
            const key = arr[0];
            const me = item.substring(key.length);
            Object.assign(messages, {
              [key]: me,
            });
          });
          throw new ValidateException(messages, err.getStatus());
        }
      }
      throw err;
    }
  }
}
