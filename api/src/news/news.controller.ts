import { Controller, Get, Param, Query } from '@nestjs/common';
import { NewsService } from './news.service';
import { ApiTags, ApiOperation, ApiQuery, ApiParam } from '@nestjs/swagger';

@ApiTags('news')
@Controller('api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch paginated list of news events' })
  @ApiQuery({ name: 'filter', required: false, description: 'Filter by Impact Level (HIGH, MEDIUM, LOW)' })
  @ApiQuery({ name: 'date', required: false, description: 'Filter by Timeframe (today, tomorrow, week)' })
  @ApiQuery({ name: 'page', required: false, type: Number, description: 'Page number (default 1)' })
  @ApiQuery({ name: 'limit', required: false, type: Number, description: 'Items per page (default 20)' })
  async getNews(
    @Query('filter') filter?: string,
    @Query('date') date?: string,
    @Query('page') page?: string,
    @Query('limit') limit?: string,
  ) {
    const pageNum = page ? parseInt(page, 10) : 1;
    const limitNum = limit ? parseInt(limit, 10) : 20;
    return this.newsService.getNewsFeed(filter, date, pageNum, limitNum);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Fetch a single news event by ID' })
  @ApiParam({ name: 'id', description: 'The ID of the News Event' })
  async getNewsById(@Param('id') id: string) {
    return this.newsService.getNewsById(id);
  }

  @Get(':id/ai-analysis')
  @ApiOperation({ summary: 'Fetch deep-dive AI simulation scenarios and heatmap data for a specific event' })
  @ApiParam({ name: 'id', description: 'The ID of the News Event' })
  async getAiAnalysis(@Param('id') id: string) {
    return this.newsService.getAiAnalysis(id);
  }
}
