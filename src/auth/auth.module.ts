/* eslint-disable */
// src/auth/auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service'; // Prisma Service importieren

@Module({
  imports: [JwtModule.register({ secret: 'your-secret-key' })],
  controllers: [AuthController],
  providers: [AuthService, PrismaService], // Prisma Service hier hinzufügen
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
