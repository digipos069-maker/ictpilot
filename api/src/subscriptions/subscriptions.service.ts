import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { PlanType, Subscription } from '@prisma/client';

@Injectable()
export class SubscriptionsService {
  constructor(private prisma: PrismaService) {}

  async getSubscriptionByUserId(userId: number): Promise<Subscription | null> {
    return this.prisma.subscription.findUnique({
      where: { userId },
    });
  }

  async upgradePlan(userId: number, plan: PlanType): Promise<Subscription> {
    return this.prisma.subscription.update({
      where: { userId },
      data: { plan },
    });
  }
}
