import 'newrelic';
import {NestFactory} from '@nestjs/core';
import {DocumentBuilder, SwaggerModule} from '@nestjs/swagger';
import {AppModule} from './app.module';
import * as compression from 'compression';
import * as express from 'express';
import {ValidationPipe} from '@nestjs/common';
import * as helmet from 'helmet';
import * as connectRedis from 'connect-redis';
import * as expressSession from 'express-session';

const sessionConfig: any = {
  secret: '12345',
  cookie: {maxAge: 2 * 60 * 60 * 1000},
  resave: false,
  saveUninitialized: true,
};
const redisStore = connectRedis(expressSession);

sessionConfig.store = new redisStore({
  host: 'localhost',
  port: 6379,
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /*
  This is for using a session
   */
  app.use(expressSession(sessionConfig));

  /*
  This is for adding compression to our application responses
   */
  app.use(compression());

  /*
  This adds a little default security to our server
  See https://github.com/helmetjs/helmet#how-it-works for more
   */
  app.use(helmet());

  /*
  This is for using the type validation via the DTO's
   */
  app.useGlobalPipes(new ValidationPipe());

  /*
  This is for serving static files via express static
   */
  app.use(express.static('public'));

  /*
  This gives us the ability to use the roles guard everywhere without having to declare
   */
  // TODO: Find out how to change the guard to enable this
  // app.useGlobalGuards(new RolesGuard());
  /*
  This is the setup for swagger documentation on our application
   */
  const options = new DocumentBuilder()
    .setTitle('nestjs ng china Example')
    .setDescription('Demonstrating that Swagger API documentation can be created from nestJS')
    .setVersion('1.0') // This should pull from package.json
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('docs', app, document);

  /*
  This is the standard server start
   */
  await app.listen(3000);
}

bootstrap();
