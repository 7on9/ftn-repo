import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsUUID } from 'class-validator';

export class IdNumberReq {
  @ApiProperty()
  @IsNumber()
  id: number;
}
export class UUIDReq {
  @ApiProperty()
  @IsUUID('4')
  id: string;
}

export class UUIDListReq {
  @ApiProperty({ type: [String] })
  @IsArray()
  @IsUUID('4', { each: true })
  ids: string[];
}

export class EmptyPageResponse {
  data = [];
  @ApiProperty()
  total = 0;
}

export class MessageResponse {
  @ApiProperty({
    example: 'success',
  })
  message: string = 'success';
  constructor(message = 'success') {
    this.message = message;
  }
}

export class SuccessResponse {
  @ApiProperty({
    example: 'success',
  })
  message: string = 'success';
}

export class DataSuccessResponse {
  @ApiProperty({
    example: 'success',
  })
  message: string = 'success';
  data: any;

  constructor(data: any) {
    this.data = data;
  }
}
