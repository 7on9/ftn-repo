import {
  Get,
  HttpCode,
  Post,
  Delete,
  Put,
  Patch,
  Controller,
  ControllerOptions,
  HttpStatus,
} from '@nestjs/common';
import { MODULE_PATH, PATH_METADATA } from '@nestjs/common/constants';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { MethodGetOptions, MethodOptions } from './types';

export function DefController(prefix?: string | string[]): ClassDecorator;
export function DefController(options: ControllerOptions): ClassDecorator;
export function DefController(options: any): ClassDecorator {
  return (target: Function) => {
    const modulePath = Reflect.getMetadata(MODULE_PATH, target);
    const pathMetadata = Reflect.getMetadata(PATH_METADATA, target);
    console.log('-------------------');
    console.log(
      JSON.stringify({
        modulePath,
        pathMetadata,
      }),
    );
    console.log('-------------------');
    // ApiTags(target.name)(target);
    ApiBearerAuth()(target);
    Controller(options)(target);
  };
}

export function DefGet(
  path?: string | string[],
  options: MethodGetOptions = new MethodGetOptions(),
): MethodDecorator {
  return function <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const { statusCode = HttpStatus.OK, summary, responseType = undefined } = options;
    const output = {
      ...HttpCode(statusCode)(target, propertyKey, descriptor),
      ...ApiOperation({ summary })(target, propertyKey, descriptor),
      ...Get(path)(target, propertyKey, descriptor),
    };
    if (responseType) {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode, type: responseType })(target, propertyKey, descriptor),
      });
    } else {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode })(target, propertyKey, descriptor),
      });
    }

    return output;
  };
}

export function DefPost(
  path?: string | string[],
  options: MethodOptions = new MethodOptions(),
): MethodDecorator {
  return function <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const {
      statusCode = HttpStatus.OK,
      summary,
      responseType = undefined,
      bodyType = undefined,
    } = options;
    const output = {
      ...HttpCode(statusCode)(target, propertyKey, descriptor),
      ...ApiOperation({ summary })(target, propertyKey, descriptor),
      ...Post(path)(target, propertyKey, descriptor),
    };
    if (responseType) {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode, type: responseType })(target, propertyKey, descriptor),
      });
    } else {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode })(target, propertyKey, descriptor),
      });
    }
    if (bodyType) {
      Object.assign(output, {
        ...ApiBody({ type: bodyType })(target, propertyKey, descriptor),
      });
    }

    return output;
  };
}

export function DefPut(
  path?: string | string[],
  options: MethodOptions = new MethodOptions(),
): MethodDecorator {
  return function <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const {
      statusCode = HttpStatus.OK,
      summary,
      responseType = undefined,
      bodyType = undefined,
    } = options;
    const output = {
      ...HttpCode(statusCode)(target, propertyKey, descriptor),
      ...ApiOperation({ summary })(target, propertyKey, descriptor),
      ...Put(path)(target, propertyKey, descriptor),
    };
    if (responseType) {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode, type: responseType })(target, propertyKey, descriptor),
      });
    } else {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode })(target, propertyKey, descriptor),
      });
    }
    if (bodyType) {
      Object.assign(output, {
        ...ApiBody({ type: bodyType })(target, propertyKey, descriptor),
      });
    }

    return output;
  };
}

export function DefPatch(
  path?: string | string[],
  options: MethodOptions = new MethodOptions(),
): MethodDecorator {
  return function <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const {
      statusCode = HttpStatus.OK,
      summary,
      responseType = undefined,
      bodyType = undefined,
    } = options;
    const output = {
      ...HttpCode(statusCode)(target, propertyKey, descriptor),
      ...ApiOperation({ summary })(target, propertyKey, descriptor),
      ...Patch(path)(target, propertyKey, descriptor),
    };
    if (responseType) {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode, type: responseType })(target, propertyKey, descriptor),
      });
    } else {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode })(target, propertyKey, descriptor),
      });
    }
    if (bodyType) {
      Object.assign(output, {
        ...ApiBody({ type: bodyType })(target, propertyKey, descriptor),
      });
    }

    return output;
  };
}

export function DefDelete(
  path?: string | string[],
  options: MethodOptions = new MethodOptions(),
): MethodDecorator {
  return function <T>(
    target: Object,
    propertyKey: string | symbol,
    descriptor: TypedPropertyDescriptor<T>,
  ) {
    const {
      statusCode = HttpStatus.OK,
      summary,
      responseType = undefined,
      bodyType = undefined,
    } = options;
    const output = {
      ...HttpCode(statusCode)(target, propertyKey, descriptor),
      ...ApiOperation({ summary })(target, propertyKey, descriptor),
      ...Delete(path)(target, propertyKey, descriptor),
    };
    if (responseType) {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode, type: responseType })(target, propertyKey, descriptor),
      });
    } else {
      Object.assign(output, {
        ...ApiResponse({ status: statusCode })(target, propertyKey, descriptor),
      });
    }
    if (bodyType) {
      Object.assign(output, {
        ...ApiBody({ type: bodyType })(target, propertyKey, descriptor),
      });
    }

    return output;
  };
}
