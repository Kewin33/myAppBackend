/* eslint-disable */
import { Body, Controller, Post } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post('addStreak')
  async setStreak(
    @Body('phoneNumber') phoneNumber: string,
  ){
    return this.homeService.addStreak(phoneNumber);
  }
}
