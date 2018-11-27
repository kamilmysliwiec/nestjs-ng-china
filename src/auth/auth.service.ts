import {JwtService} from '@nestjs/jwt';
import {Injectable} from '@nestjs/common';
import {JwtPayload} from './interfaces/jwt-payload.interface';
import {UsersService} from '../users/users.service';
import {LoginDto} from './LoginDto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {
  }

  async signIn(loginDto: LoginDto): Promise<string> {
    // In the real-world app you shouldn't expose this method publicly
    // instead, return a token once you verify user credentials
    const user: JwtPayload = {username: loginDto.username};
    return this.jwtService.sign(user);
  }

  async validateUser(payload: JwtPayload): Promise<any> {
    return await this.usersService.findByUsername(payload.username);
  }
}