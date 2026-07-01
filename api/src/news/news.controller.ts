import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { NewsService } from './news.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { ApiTags, ApiOperation, ApiQuery, ApiParam, ApiBearerAuth } from '@nestjs/swagger';

@ApiTags('news')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/news')
export class NewsController {
  constructor(private readonly newsService: NewsService) {}

  @Get()
  @ApiOperation({ summary: 'Fetch paginated list of news events' })
  @ApiQuery({ name: 'filter', required: false, description: 'Filter by Impact Level (HIGH, MEDIUM, LOW)' })
  @ApiQuery({ name: 'date', required: false, description: 'Filter by Timeframe (today, tomorrow, week)' })
  async getNews(
    @Query('filter') filter?: string,
    @Query('date') date?: string,
  ) {
    return this.newsService.getNewsFeed(filter, date);
  }

  @Get(':id/ai-analysis')
  @ApiOperation({ summary: 'Fetch deep-dive AI simulation scenarios and heatmap data for a specific event' })
  @ApiParam({ name: 'id', description: 'The ID of the News Event' })
  async getAiAnalysis(@Param('id') id: string) {
    return this.newsService.getAiAnalysis(id);
  }
}
