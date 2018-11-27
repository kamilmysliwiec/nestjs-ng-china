import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersEntity} from './Users.entity';
import {TypeOrmModule} from '@nestjs/typeorm';
import {UsersController} from './users.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([UsersEntity]),
  ],
  controllers: [
    UsersController,
  ],
  providers: [
    UsersService,
  ],
  exports: [
    UsersService,
  ],
})
export class UsersModule {
}
