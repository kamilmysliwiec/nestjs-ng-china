import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthcheckController } from './healthcheck/healthcheck.controller';
import { HeroesModule } from './heroes/heroes.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [HeroesModule, AuthModule, UsersModule],
  controllers: [AppController, HealthcheckController],
  providers: [AppService],
})
export class AppModule {}
