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
      // Set to midnight UTC
      const startOfDay = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate(), 0, 0, 0, 0));
      
      let endRange = new Date(startOfDay);
      
      if (timeframe === 'today') {
        endRange.setUTCDate(endRange.getUTCDate() + 1);
      } else if (timeframe === 'tomorrow') {
        startOfDay.setUTCDate(startOfDay.getUTCDate() + 1);
        endRange = new Date(startOfDay);
        endRange.setUTCDate(endRange.getUTCDate() + 1);
      } else if (timeframe === 'week') {
        endRange.setUTCDate(endRange.getUTCDate() + 7);
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

  async upsertNews(data: any): Promise<News> {
    return this.prisma.news.upsert({
      where: {
        title_eventTime_country: {
          title: data.title,
          eventTime: new Date(data.eventTime),
          country: data.country,
        },
      },
      update: {
        category: data.category,
        impact: data.impact,
        effectLevel: data.effectLevel,
        affectedPairs: data.affectedPairs || [],
        status: data.status,
        source: data.source,
      },
      create: {
        title: data.title,
        eventTime: new Date(data.eventTime),
        country: data.country,
        category: data.category,
        impact: data.impact,
        effectLevel: data.effectLevel,
        affectedPairs: data.affectedPairs || [],
        status: data.status,
        source: data.source,
      },
    });
  }
}
