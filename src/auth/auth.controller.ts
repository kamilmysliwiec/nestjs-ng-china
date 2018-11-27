import {Body, Controller, Post} from '@nestjs/common';
import {LoginDto} from './LoginDto';
import {AuthService} from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    const token = this.authService.signIn();
    return token;
  }
}