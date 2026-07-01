import { Injectable, CanActivate, ExecutionContext, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PlanType } from '@prisma/client';
import { REQUIRE_PLAN_KEY } from '../decorators/require-plan.decorator';
import { SubscriptionsService } from '../../subscriptions/subscriptions.service';

@Injectable()
export class PlanGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private subscriptionsService: SubscriptionsService,
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const requiredPlans = this.reflector.getAllAndOverride<PlanType[]>(REQUIRE_PLAN_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredPlans || requiredPlans.length === 0) {
      return true; // No plan required, let them through
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user) {
      throw new ForbiddenException('User not found');
    }

    const subscription = await this.subscriptionsService.getSubscriptionByUserId(user.id);

    if (!subscription) {
      throw new ForbiddenException('User does not have an active subscription');
    }

    // Logic: PRO > PLUS > FREE
    const planHierarchy = {
      [PlanType.FREE]: 1,
      [PlanType.PLUS]: 2,
      [PlanType.PRO]: 3,
    };

    const userPlanLevel = planHierarchy[subscription.plan];
    
    // We check if the user's plan level is >= any of the required plans
    const hasRequiredPlan = requiredPlans.some((plan) => userPlanLevel >= planHierarchy[plan]);

    if (!hasRequiredPlan) {
      throw new ForbiddenException('Your current subscription plan does not allow access to this feature.');
    }

    return true;
  }
}
