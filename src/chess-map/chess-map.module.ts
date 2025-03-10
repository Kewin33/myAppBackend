import { Module } from '@nestjs/common';
import { ChessMapController } from './chess-map.controller';
import { ChessMapService } from './chess-map.service';

@Module({
  controllers: [ChessMapController],
  providers: [ChessMapService]
})
export class ChessMapModule {}
