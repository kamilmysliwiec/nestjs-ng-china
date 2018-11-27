import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HealthcheckController} from './healthcheck/healthcheck.controller';
import {HeroesModule} from './heroes/heroes.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import {UiLogsModule} from './ui-logs/ui-logs.module';
import {FileUploadModule} from './file-upload/file-upload.module';
import {FileDownloadModule} from './file-download/file-download.module';
import {join} from 'path';
import {CatsModule} from './cats/cats.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    CatsModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    HeroesModule,
    AuthModule,
    UsersModule,
    UiLogsModule,
    FileUploadModule,
    FileDownloadModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'ngchina',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
    })],
  controllers: [AppController, HealthcheckController],
  providers: [AppService],
})
export class AppModule {
}
