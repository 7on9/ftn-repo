import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateException, ApiException } from './dto';
import { EntityNotFoundError, QueryFailedError } from 'typeorm';

const separatorCharacter = ' ';

const pipeException = (dataPipe: { apiException: ApiException; type?: 'ValidateException' }) => {
  const { apiException, type = '' } = dataPipe;
  const { message: messageKey = '', errors: errorRoot = {} } = apiException;
  const message = messageKey.trim().replace(/\s/g, separatorCharacter);

  if (type && type === 'ValidateException') {
    const errors = {};
    Object.keys(errorRoot).forEach(key => {
      const value =
        errorRoot[key] && typeof errorRoot[key] === 'string'
          ? errorRoot[key].trim().replace(/\s/g, separatorCharacter)
          : errorRoot[key];

      Object.assign(errors, {
        [key]: value,
      });
    });
    return {
      ...apiException,
      errors,
      message: message,
    };
  }
  return {
    ...apiException,
    message: message,
  };
};

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException | ValidateException | any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    console.log('--------HttpExceptionFilter-----------');
    // console.log(exception);
    // console.log('-------------------');
    let status = 500;
    if (exception instanceof HttpException) {
      status = exception.getStatus();
      if (exception instanceof ValidateException) {
        response.status(status).send(
          pipeException({
            apiException: new ApiException('Value not right', status, exception.messages),
            type: 'ValidateException',
          }),
        );

        return;
      }
      console.log('Errorhandler', request.path, 'status', 'message:', exception.message);

      let res = exception.getResponse();
      if (res instanceof Object) {
        if (res['message']) {
          if (typeof res['message'] === 'string') {
            response.status(status).send(
              pipeException({
                apiException: new ApiException(res['message'], status),
              }),
            );
            return;
          } else {
            response.status(status).send(
              pipeException({
                apiException: new ApiException('Unknown', status, res['message']),
              }),
            );
            return;
          }
        } else {
          response.status(status).send(
            pipeException({
              apiException: new ApiException('Unknown', status),
            }),
          );
          return;
        }
      }

      response.status(status).send(
        pipeException({
          apiException: new ApiException('Unknown', status, res),
        }),
      );
      return;
    }

    if (typeof exception === 'string') {
      response.status(status).send(
        pipeException({
          apiException: new ApiException(exception, status),
        }),
      );
      return;
    }

    if (exception instanceof ApiException) {
      response.status(status).send(
        pipeException({
          apiException: exception,
        }),
      );
      return;
    }
    response.status(status).send(
      pipeException({
        apiException: new ApiException('Unknown', status, exception),
      }),
    );
    return;
  }
}

@Catch(QueryFailedError, EntityNotFoundError)
export class TypeOrmFilter implements ExceptionFilter {
  catch(exception: QueryFailedError | EntityNotFoundError, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    response
      .status(HttpStatus.BAD_REQUEST)
      .send(new ApiException('Unknown', HttpStatus.BAD_REQUEST, { message: exception.message }));
  }
}
