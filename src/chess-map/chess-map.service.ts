/* eslint-disable*/
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
    return this.prisma.chessMap.update({
      where: { phoneNumber },
      data: {
        location,  // Set the new location
        date,      // Set the current date and time
      },
    });
  }

  async getFriendsLocation(phoneNumbers: string[]) {
    return this.prisma.chessMap.findMany({
      where: {
        phoneNumber: { in: phoneNumbers },
      },
      select: {
        location: true,
        date: true,
        user: { // User-Relation mit den benötigten Feldern laden
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
  }
}
