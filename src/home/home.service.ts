/* eslint-disable*/
import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class HomeService {
  constructor(
    private prisma: PrismaService,
  ) {}

  async addStreak(phoneNumber:string){
    const date = new Date();

    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      throw new Error('User not found');
    }
    return null;
  }
}
