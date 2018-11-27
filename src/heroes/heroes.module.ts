import {CacheModule, Module} from '@nestjs/common';
import {HeroesController} from './heroes.controller';
import * as redisStore from 'cache-manager-redis-store';
import {HeroesService} from './heroes.service';
import {HeroEntity} from './Hero.entity';
import {TypeOrmModule} from '@nestjs/typeorm';

@Module({
  controllers: [HeroesController],
  imports: [
    TypeOrmModule.forFeature([HeroEntity]),
    // TODO: Make this register with just in memory if redis unavailable or an environment
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 6379,
    }),
  ],
  providers: [HeroesService],
})
export class HeroesModule {
  constructor() {

  }

}
