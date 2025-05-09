import { HttpException, HttpStatus } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class ApiException<T = any> {
  @ApiProperty()
  public type: string = 'DEFAULT';

  public httpCode?: HttpStatus;

  @ApiPropertyOptional({ type: Number, example: -1 })
  public businessCode?: number = -1;

  @ApiPropertyOptional({ type: String })
  public message?: string;

  @ApiPropertyOptional()
  public errors?: T;

  constructor(
    message: string,
    httpCode: HttpStatus = HttpStatus.INTERNAL_SERVER_ERROR,
    errors: T | undefined = undefined,
    type: string = 'DEFAULT',
    businessCode: number = -1,
  ) {
    this.httpCode = httpCode;
    this.message = message;
    this.type = type;
    this.businessCode = businessCode;
    this.errors = errors;
  }
}
export class BusinessException<T = any> extends ApiException<T> {
  constructor(
    message: string = '',
    businessCode: number = -1,
    errors: T | undefined = undefined,
  ) {
    super(message, HttpStatus.BAD_REQUEST, errors, 'BUSINESS', businessCode);
  }
}

export class ValidateException extends HttpException {
  public messages: {
    [key: string]: string;
  };
  constructor(messages: { [key: string]: string }, status: number) {
    super(JSON.stringify(messages), status);
    this.messages = messages;
  }
}

export class SuccessVerifySuccessResponse {
  @ApiProperty()
  message: string = 'Verify Email Success';
  @ApiProperty()
  isVerify: boolean = true;
}

export class SuccessVerifyFailResponse {
  @ApiProperty()
  message: string = 'Verify Email Fail';
  @ApiProperty()
  isVerify: boolean = false;
}

export class SuccessForgotPasswordSuccessResponse {
  @ApiProperty()
  message: string = 'Forgot Password Success';
}

export class FailForgotPasswordSuccessResponse {
  @ApiProperty()
  message: string = 'Forgot Password Fail';
}
