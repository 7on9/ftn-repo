import { NestFactory } from '@nestjs/core';
import { FtnWorkerModule } from './ftn-worker.module';

async function bootstrap() {
  const app = await NestFactory.create(FtnWorkerModule);
  await app.listen(process.env.port ?? 3000);
}
bootstrap();
