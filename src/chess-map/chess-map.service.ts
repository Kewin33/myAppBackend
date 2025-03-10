import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ChessMapService {
  constructor(
    private prisma: PrismaService
  ) {}

  async setLocation(phoneNumber: string, location: string) {
    const date = new Date();
    
    const user = await this.prisma.user.findUnique({
      where: { phoneNumber },
    });

    if (!user) {
      throw new Error('User not found');
    }

    // Update user with location and date
    return await this.prisma.user.update({
      where: { phoneNumber },
      data: {
        location,  // Set the new location
        date,      // Set the current date and time
      },
    });
  }

  async getFriendsLocation(phoneNumbers: string[]) {
    const result = await this.prisma.user.findMany({
      where: {
        phoneNumber: {
          in: phoneNumbers, // "in" erwartet ein Array als Wert
        },
      },
      select: {
        firstName: true,
        lastName: true,
        location: true,
        date: true,
      },
    });
    return result;
  }
}
