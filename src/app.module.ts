import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {HealthcheckController} from './healthcheck/healthcheck.controller';
import {HeroesModule} from './heroes/heroes.module';
import {AuthModule} from './auth/auth.module';
import {UsersModule} from './users/users.module';
import { UiLogsModule } from './ui-logs/ui-logs.module';
import { FileUploadModule } from './file-upload/file-upload.module';
import { FileDownloadModule } from './file-download/file-download.module';

@Module({
  imports: [HeroesModule, AuthModule, UsersModule, UiLogsModule, FileUploadModule, FileDownloadModule],
  controllers: [AppController, HealthcheckController],
  providers: [AppService],
})
export class AppModule {
}
