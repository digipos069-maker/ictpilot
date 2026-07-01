import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsInternalController } from './news-internal.controller';

@Module({
  controllers: [NewsController, NewsInternalController],
  providers: [NewsService],
})
export class NewsModule {}
