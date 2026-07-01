import { Controller, Get, Post, Body, UseGuards, Request } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { PlanType } from '@prisma/client';
import { ApiTags, ApiOperation, ApiBearerAuth, ApiBody } from '@nestjs/swagger';

@ApiTags('subscriptions')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('subscriptions')
export class SubscriptionsController {
  constructor(private readonly subscriptionsService: SubscriptionsService) {}

  @Get('me')
  @ApiOperation({ summary: 'Get current user subscription details' })
  async getMySubscription(@Request() req: any) {
    return this.subscriptionsService.getSubscriptionByUserId(req.user.id);
  }

  @Post('upgrade')
  @ApiOperation({ summary: 'Upgrade user subscription plan' })
  @ApiBody({ schema: { type: 'object', properties: { plan: { type: 'string', example: 'PLUS' } } } })
  async upgradePlan(@Request() req: any, @Body('plan') plan: PlanType) {
    return this.subscriptionsService.upgradePlan(req.user.id, plan);
  }
}
