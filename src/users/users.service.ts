import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  findOneByEmail(email: string) {
    return { email };
  }
}