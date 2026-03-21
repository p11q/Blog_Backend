import { Body, Controller, Delete, Param, Post, Put } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CreateCommentDto } from './dto/creat-comment.dto';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @Post(':id')
  create(@P, @Body() data: CreateCommentDto) {
      return this.commentsService.create()
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() data: UpdateCommentDto) {}

  @Delete('id')
  delete(@Param('id') id: number) {}
}
