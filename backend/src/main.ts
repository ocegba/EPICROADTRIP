import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  console.log('helloooooooooooooooo', process.env.ACCESS_SECRET);
  dotenv.config();
  const app = await NestFactory.create(AppModule);

  await app.listen(3000);
}
bootstrap();
