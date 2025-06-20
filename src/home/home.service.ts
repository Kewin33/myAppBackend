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

  async getRandomPuzzle(minRating: number, maxRating: number, theme?: string) {
  // Basis-Filter
  const whereClause: any = {
    rating: {
      gte: minRating,
      lte: maxRating,
    },
  };

  // Wenn Theme gesetzt, filtere auch danach (einfach LIKE Suche in themes)
  if (theme) {
  const includeThemes = theme
    .split(' ')
    .filter(t => !t.startsWith('!')); // z.B. ['rookEndgame', 'mateIn1']
  const excludeThemes = theme
    .split(' ')
    .filter(t => t.startsWith('!'))
    .map(t => t.slice(1)); // z.B. ['backRankMate']

  whereClause.AND = [];

  // Include-Themes
  for (const t of includeThemes) {
    whereClause.AND.push({
      themes: {
        contains: t,
        mode: 'insensitive',
      },
    });
  }

  // Exclude-Themes
  for (const t of excludeThemes) {
    whereClause.AND.push({
      NOT: {
        themes: {
          contains: t,
          mode: 'insensitive',
        },
      },
    });
  }
}


//find random puzzle
  const count = await this.prisma.puzzle.count({ where: whereClause });

  if (count === 0) return null;

  const randomOffset = Math.floor(Math.random() * count);

  const randomPuzzle = await this.prisma.puzzle.findMany({
    where: whereClause,
    skip: randomOffset,
    take: 1,
  });

  return randomPuzzle[0];
}


}
