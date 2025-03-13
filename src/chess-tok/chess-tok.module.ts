/* eslint-disable */
import { Module } from '@nestjs/common';
import { ChessTokController } from './chess-tok.controller';
import { ChessTokService } from './chess-tok.service';

@Module({
  controllers: [ChessTokController],
  providers: [ChessTokService],
  exports: [ChessTokService]
})
export class ChessTokModule{}
