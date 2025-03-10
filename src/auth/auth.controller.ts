/* eslint-disable */
import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Throttle } from '@nestjs/throttler';
import twilio from 'twilio';

const twilioClient = twilio('ACc5a17d0f28b2892e71f1c1cc8219665a','34b4090d2493dfc90f0297c86f8a55ab');
const TWILIO_SERVICE_SID = '';
//sid = 'SKa0ece144300547cf4399e2ed1921c846';
//api secret = 'jKizLgaHwSKdsRVUJ1LBlUIpx0wDRUmb';

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
    @Body('phoneNumber') phoneNumber: string,
    @Body('password') password: string
  ){
    return this.authService.login(phoneNumber, password);
  }

  @Post('sendCode')
  async sendCode(@Body('phoneNumber') phoneNumber: string) {
    try{
      await twilioClient
    }catch(error){

    }
  }
}
