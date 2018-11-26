import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import * as compression from 'compression';
import * as express from 'express';
import * as cors from 'cors';

import {WsAdapter} from '@nestjs/websockets';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors());
  app.use(compression());

  app.useWebSocketAdapter(new WsAdapter(app));

  app.use(express.static('public'));

  await app.listen(3000);
}

bootstrap();
