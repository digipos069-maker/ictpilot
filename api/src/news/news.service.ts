import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { ImpactLevel, News, AiImpactAnalysis } from '@prisma/client';

@Injectable()
export class NewsService {
  constructor(private prisma: PrismaService) {}

  async getNewsFeed(impact?: string, timeframe?: string): Promise<News[]> {
    const where: any = {};

    if (impact) {
      where.impact = impact.toUpperCase() as ImpactLevel;
    }

    if (timeframe) {
      const now = new Date();
      const startOfDay = new Date(now.setHours(0, 0, 0, 0));
      
      let endRange = new Date(startOfDay);
      
      if (timeframe === 'today') {
        endRange.setDate(endRange.getDate() + 1);
      } else if (timeframe === 'tomorrow') {
        startOfDay.setDate(startOfDay.getDate() + 1);
        endRange = new Date(startOfDay);
        endRange.setDate(endRange.getDate() + 1);
      } else if (timeframe === 'week') {
        endRange.setDate(endRange.getDate() + 7);
      }

      where.eventTime = {
        gte: startOfDay,
        lt: endRange,
      };
    }

    return this.prisma.news.findMany({
      where,
      orderBy: { eventTime: 'asc' },
    });
  }

  async getAiAnalysis(newsId: string): Promise<AiImpactAnalysis> {
    const analysis = await this.prisma.aiImpactAnalysis.findUnique({
      where: { eventId: newsId },
    });

    if (!analysis) {
      throw new NotFoundException('AI Analysis not found for this event');
    }

    return analysis;
  }
}
