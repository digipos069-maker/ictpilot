import { Module } from '@nestjs/common';
import { NewsService } from './news.service';
import { NewsController } from './news.controller';
import { NewsInternalController } from '../webhook/news-internal.controller';

@Module({
  controllers: [NewsController, NewsInternalController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
