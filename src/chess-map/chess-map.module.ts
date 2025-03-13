import { Module } from '@nestjs/common';
import { ChessMapController } from './chess-map.controller';
import { ChessMapService } from './chess-map.service';
import { PrismaService } from '../prisma/prisma.service';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guard/auth.guard';

@Module({
  controllers: [ChessMapController],
  providers: [
    ChessMapService,
    PrismaService,
    {
      provide: APP_GUARD,
      useClass: AuthGuard, // Guard nur für dieses Modul
    },
  ],
})

export class ChessMapModule {}
