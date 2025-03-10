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
  async login(phoneNumber: string, password: string) {
    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });
    if (!user) throw new Error('User not found');
    const isMatch = user.password == password;
    if (!isMatch) throw new Error('Invalid password');
    const payload = { email: user.phoneNumber, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return { statusCode: 200, body: accessToken };
  }
}
