import { Controller, Post, Get, Query, Body } from '@nestjs/common';
import { HomeService } from './home.service';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post('addStreak')
  async setStreak(@Body('phoneNumber') phoneNumber: string) {
    return this.homeService.addStreak(phoneNumber);
  }

  @Get('randomPuzzle')
  async getRandomPuzzle(
    @Query('minRating') minRating?: string,
    @Query('maxRating') maxRating?: string,
    @Query('theme') theme?: string,
  ) {
    const min = minRating ? parseInt(minRating, 10) : 1500;
    const max = maxRating ? parseInt(maxRating, 10) : 1600;

    return this.homeService.getRandomPuzzle(min, max, theme);
  }
}
