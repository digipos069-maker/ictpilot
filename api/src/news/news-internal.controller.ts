import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiKeyGuard } from '../auth/guards/api-key.guard';
import { ApiTags, ApiOperation, ApiSecurity } from '@nestjs/swagger';

@ApiTags('internal')
@ApiSecurity('x-api-key')
@UseGuards(ApiKeyGuard)
@Controller('api/v1/internal/news')
export class NewsInternalController {
  constructor(private readonly newsService: NewsService) {}

  @Post()
  @ApiOperation({ summary: 'Internal webhook to ingest news from Python crawler' })
  async ingestNews(@Body() body: any) {
    return this.newsService.upsertNews(body);
  }
}
