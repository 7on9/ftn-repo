import * as dotenv from 'dotenv';
import * as express from 'express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
dotenv.config();
import { NestFactory } from '@nestjs/core';
import { FtnModule } from './ftn.module';
import * as timezone from 'dayjs/plugin/timezone';
import * as utc from 'dayjs/plugin/utc';
import * as dayjs from 'dayjs';
import * as weekday from 'dayjs/plugin/weekday';
import * as isSameOrAfter from 'dayjs/plugin/isSameOrAfter';

import { setupTransactionContext } from '~/libs/@core/decorator';
import { GlobalPrefix } from '~/libs/common/constants';
import { ValidatePipe } from '~/libs/@systems/pipe';
import { I18nValidationExceptionFilter } from 'nestjs-i18n';
import {
  HttpExceptionFilter,
  TypeOrmFilter,
} from '~/libs/@systems/exceptions/http-exception-filter';
import { configEnv } from '~/libs/@config/env';
import { INestApplication } from '@nestjs/common';
import { getFromContainer, MetadataStorage } from 'class-validator';
import { validationMetadatasToSchemas } from 'class-validator-jsonschema';
import { SchemasObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';
import { ApiException } from '~/libs/@systems/exceptions';
dayjs.extend(utc);
dayjs.extend(timezone);
dayjs.extend(weekday);
dayjs.extend(isSameOrAfter);

const configSwagger = (app: INestApplication) => {
  const { SWAGGER_TITLE, SWAGGER_DESCRIPTION, SWAGGER_VERSION } = configEnv();
  const options = new DocumentBuilder()
    .setTitle(SWAGGER_TITLE!)
    .setDescription(SWAGGER_DESCRIPTION!)
    .setVersion(SWAGGER_VERSION!)
    .addSecurity('bearer', {
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
    })
    .build();

  const document = SwaggerModule.createDocument(app, options, {
    // extraModels: [PageResponse]
  });

  // Creating all the swagger schemas based on the class-validator decorators
  const metadatas = (getFromContainer(MetadataStorage) as any)
    .validationMetadatas;
  const targetSchemas = document?.components?.schemas || {};
  const schemasBinding = validationMetadatasToSchemas(metadatas) || {};

  Object.keys(schemasBinding).forEach((key) => {
    const value = schemasBinding[key] as SchemasObject;
    if (!targetSchemas[key]) {
      Object.assign(targetSchemas, {
        key: value,
      });
    } else {
      const targetValue = targetSchemas[key] as SchemasObject;

      Object.assign(targetValue.properties, value.properties);
      targetValue.required = value.required;
      Object.assign(targetSchemas, {
        key: targetValue,
      });
    }
  });
  if (document.components?.schemas) {
    document.components.schemas = Object.assign({}, targetSchemas);
  }
  SwaggerModule.setup('swagger', app, document);
};

async function bootstrap() {
  const { REQUEST_TIMEOUT = 30 * 60 * 1000 } = configEnv();
  setupTransactionContext();
  const app = await NestFactory.create(FtnModule);
  await app.listen(process.env.PORT ?? 3000);

  //#region Common config
  app.enableCors({
    origin: '*',
  });
  app.setGlobalPrefix(GlobalPrefix.API);
  app.useGlobalPipes(
    new ValidatePipe({
      whitelist: false, // Chỉ giữ lại các field có trong DTO
      forbidNonWhitelisted: false, // Chặn field không có trong DTO
      transform: true, // Chuyển đổi kiểu dữ liệu tự động
    }),
  );
  app.useGlobalFilters(new I18nValidationExceptionFilter());
  // app.useGlobalInterceptors(new TransformInterceptor())
  app.useGlobalFilters(new HttpExceptionFilter(), new TypeOrmFilter());
  app.use(
    (
      req: express.Request,
      res: express.Response,
      next: express.NextFunction,
    ) => {
      const { REQUEST_TIMEOUT = 30 * 60 * 1000 } = configEnv();
      res.setTimeout(REQUEST_TIMEOUT as number, () => {
        next(new ApiException('REQUEST TIMEOUT'));
      });
      next();
    },
  );

  //#endregion
  configSwagger(app);
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
