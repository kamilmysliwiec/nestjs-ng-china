import {Body, Controller, Post, Req} from '@nestjs/common';
import {LoginDto} from './LoginDto';
import {AuthService} from './auth.service';
import {RequestWithSession} from '../common/RequestWithSession';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {

  }

  @Post('/login')
  login(@Body() loginDto: LoginDto, @Req() req: RequestWithSession) {
    const token = this.authService.signIn(loginDto);
    req.session.token = token;
    return token;
  }
}