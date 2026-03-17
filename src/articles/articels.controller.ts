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
import { UserEntity } from '~/shared/module/user.entity';
import { User } from '~/libs/common/decorators/user.decorator';

@Controller('articles')
export class ArticalsController {
  constructor(private readonly service: ArticlesService) {}

  @Post()
  @UseGuards(AuthGuard)
  create(@User() user: UserEntity, @Body() data: CreateArticleDto) {
    return this.service.create(user, data);
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
    @User() user: UserEntity,
    @Param('id') id_artile: number,
    @Body() data: CreateArticleDto,
  ) {
    return this.service.updateById(user, id_artile, data);
  }

  @Delete(':id')
  @UseGuards(AuthGuard)
  deleteById(@User() user: UserEntity, @Param('id') id: number) {
    return this.service.deleteById(user, id);
  }
}
