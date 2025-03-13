import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { PrismaService } from './prisma/prisma.service';

import { ThrottlerModule } from '@nestjs/throttler';
import { AuthModule } from './auth/auth.module';
import { ChessMapModule } from './chess-map/chess-map.module';
import { ChessTokService } from './chess-tok/chess-tok.service';
import { ChessTokController } from './chess-tok/chess-tok.controller';
import { ChessTokModule } from './chess-tok/chess-tok.module';
import { HomeController } from './home/home.controller';
import { HomeService } from './home/home.service';
import { HomeModule } from './home/home.module';
import { AuthGuard } from './guard/auth.guard';
import { ChessMapService } from './chess-map/chess-map.service';
import { ChessMapController } from './chess-map/chess-map.controller';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      throttlers: [
        {
          ttl: 60000, //ms -> 60seconds
          limit: 5,
        },
      ],
    }),
    AuthModule,
    ChessMapModule,
    ChessTokModule,
    HomeModule,
    ChessMapModule,
  ],
  controllers: [
    AppController,
    AuthController,
    ChessTokController,
    HomeController,
    ChessMapController,
  ],
  providers: [
    AppService,
    AuthService,
    PrismaService,
    ChessTokService,
    HomeService,
    AuthGuard,
    ChessMapService,
  ],
  exports: [
    AuthGuard
  ]
})
export class AppModule {}
