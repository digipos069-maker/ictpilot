import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { NewsModule } from './news/news.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule, SubscriptionsModule, NewsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
