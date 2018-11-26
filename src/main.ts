import * as newRelic from 'newrelic';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import * as compression from 'compression';
import * as express from 'express';

const NR = newRelic;

async function bootstrap() {

  const app = await NestFactory.create(AppModule);
  app.use(compression());

  app.use(express.static('public'));

  const options = new DocumentBuilder()
    .setTitle('nestjs ng china Example')
    .setDescription('Demonstrating that Swagger API documentation can be created from nestJS')
    .setVersion('1.0') // This should pull from package.json
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  await app.listen(3000);
}

bootstrap();
