import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/creat-article.dto';
import { AuthGuard } from '~/guards/auth.guard';

@Controller('articles')
export class ArticalsController {
  constructor(private readonly service: ArticlesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@Request() req, @Body() data: CreateArticleDto) {
    return this.service.create(req.user, data);
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
  @UseGuards(AuthGuard)
  updateById(
    @Request() req,
    @Param('id') id_artile: number,
    @Body() data: CreateArticleDto,
  ) {
    return this.service.updateById(req.user, id_artile, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteById(@Request() req, @Param('id') id: number) {
    return this.service.deleteById(req.user, id);
  }
}
