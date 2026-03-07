import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/creat-article.dto';
import { AuthGuard } from '~/guards/auth.guard';
import { AuthorGuard } from '~/guards/author.guard';

@Controller('articles')
export class ArticalsController {
  constructor(private readonly service: ArticlesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Param('id') id: number, @Body() data: CreateArticleDto) {
    return this.service.create(id, data);
  }

  @Get()
  getList() {
    return this.service.getList();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    return this.service.getById(id);
  }

  @Put(':id')
  @UseGuards(AuthGuard, AuthorGuard)
  updateById(@Param('id') id: number, @Body() data: CreateArticleDto) {
    return this.service.updateById(id, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard, AuthorGuard)
  deleteById(@Param('id') id: number) {
    return this.service.deleteById(id);
  }
}
