import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { join } from 'path';
import * as express from 'express';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.use(express.static(join(__dirname, '../..', 'build')));

  const port = configService.get('PORT');
  await app.listen(port);
}
bootstrap();
