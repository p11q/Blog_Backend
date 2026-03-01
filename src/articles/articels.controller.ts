import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ArticalsService } from './articles.service';
import { CreateArticaleDto } from './dto/creat-article.dto';
import { UpdateArticaleDto } from './dto/update-article.dto';

@Controller('articles')
export class ArticalsController {
  constructor(private readonly service: ArticalsService) {}

  @Post()
  create(@Body() data: CreateArticaleDto) {
    return this.service.create(data);
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
  updateById(@Param('id') id: number, @Body() data: UpdateArticaleDto) {
    return this.service.updateById(id, data);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    this.service.deleteById(id);
  }
}
