import { NestFactory } from '@nestjs/core';
import { FtnModule } from './ftn.module';

async function bootstrap() {
  const app = await NestFactory.create(FtnModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
