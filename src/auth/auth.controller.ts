/* eslint-disable */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Throttle } from '@nestjs/throttler';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @Throttle({default:{limit: 5, ttl: 60}}) // 5A/60s
  async register(
    @Body('email') email: string,
    @Body('phoneNumber') phoneNumber: string,
    @Body('password') password: string,
    @Body('firstName') firstName: string,
    @Body('lastName') lastName: string,
  ){
    return this.authService.register(email, password, phoneNumber, firstName, lastName);
  }

  @Post('login')
  @Throttle({default:{limit: 5, ttl: 60}}) // 5A/60s
  async login(
    @Body('email') email: string,
    @Body('password') password: string
  ){
    return this.authService.login(email, password);
  }
}
