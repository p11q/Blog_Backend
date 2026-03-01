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
import { ArticalsService } from './articles.service';
import { CreateArticaleDto } from './dto/creat-article.dto';
import { UpdateArticaleDto } from './dto/update-article.dto';
import { AuthGuard } from '~/auth/auth.guard';

@Controller('articles')
export class ArticalsController {
  constructor(private readonly service: ArticalsService) {}

  @Post()
  @UseGuards(AuthGuard)
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
  @UseGuards(AuthGuard)
  updateById(@Param('id') id: number, @Body() data: UpdateArticaleDto) {
    return this.service.updateById(id, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteById(@Param('id') id: number) {
    this.service.deleteById(id);
  }
}
