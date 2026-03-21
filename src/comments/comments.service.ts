import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ArticleEntity } from '~/shared/module/article.entity';
import { UserEntity } from '~/shared/module/user.entity';
import { CreateCommentDto } from './dto/creat-comment.dto';
import { CommentEntity } from '~/shared/module/comment.entity';
import { CommentDto } from './dto/comment.dto';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articRepo: Repository<ArticleEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(
    article: ArticleEntity,
    user: UserEntity,
    data: CreateCommentDto,
  ) {
    const comment = new CommentEntity();
    comment.text = data.text;
    comment.author = user;

    comment.article = article;

    const res = await comment.save();

    return new CommentDto(res);
  }
}
