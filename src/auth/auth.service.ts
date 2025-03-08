import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
//import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}
  async register(
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
  ) {
    const user = await this.prisma.user.create({
      data: {
        email,
        password,
        phoneNumber,
        firstName,
        lastName,
      },
    });
    return user;
  }
  async login(email: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });
    if (!user) throw new Error('User not found');
    const isMatch = user.password == password;
    if (!isMatch) throw new Error('Invalid password');
    const payload = { email: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
