import { Body, Controller, Post, Get } from '@nestjs/common';
import { ChessMapService } from './chess-map.service';

@Controller('chess-map')
export class ChessMapController {
  constructor(private chessMapService: ChessMapService) {}

  @Post('setLocation')
  async setLocation(
    @Body('phoneNumber') phoneNumber: string,
    @Body('location') location: string,
  ){
    return this.chessMapService.setLocation(phoneNumber, location);
  }

  @Post('getFriendsLocation')
  async getFriendsLocation(@Body('phoneNumber') phoneNumber: string[]) {
    //return "Hi dude"
    return this.chessMapService.getFriendsLocation(phoneNumber);
  }
}
