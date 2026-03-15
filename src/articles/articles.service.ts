import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateArticleDto } from './dto/creat-article.dto';
import { ArticleDto } from './dto/article.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ArticleEntity } from '~/shared/module/article.entity';
import { Repository } from 'typeorm';
import { UserEntity } from '~/shared/module/user.entity';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(
    @InjectRepository(ArticleEntity)
    private readonly articRepo: Repository<ArticleEntity>,
    @InjectRepository(UserEntity)
    private readonly userRepo: Repository<UserEntity>,
  ) {}

  async create(user: UserEntity, data: CreateArticleDto) {
    const articale = new ArticleEntity();
    articale.title = data.title;
    articale.text = data.text;
    articale.description = data.description;
    articale.tags = data.tags;
    articale.author = user;

    const res = await articale.save();

    return new ArticleDto(res);
  }

  async getList() {
    const articles = await this.articRepo.find();

    return articles.map((item) => new ArticleDto(item));
  }

  async getById(id: number) {
    const article = await this.articRepo
      .findOne({
        where: { id },
        relations: ['author'],
      })
      .catch((err) => {
        console.log(err);
        return null;
      });

    if (!article) {
      throw new NotFoundException('Article not found');
    }

    return new ArticleDto(article);
  }

  async updateById(user: UserEntity, id: number, data: UpdateArticleDto) {
    const articale = await this.articRepo.findOne({
      where: {
        id,
      },
      relations: ['author'],
    });
    if (user && articale && user.id === articale.author.id) {
      await this.articRepo
        .update(
          { id },
          {
            title: data.title,
            text: data.text,
            description: data.description,
            tags: data.tags,
          },
        )
        .catch((err) => {
          console.log(err);
          return null;
        });
      return await this.getById(id);
    }
    throw new BadRequestException(
      "You don't have enough rights to change this article.",
    );
  }

  async deleteById(user: UserEntity, id: number) {
    const articale = await this.articRepo.findOne({
      where: {
        id,
      },
      relations: ['author'],
    });
    if (user && articale && user.id === articale.author.id) {
      await this.articRepo.delete(id);
    }
    throw new BadRequestException(
      "You don't have enough rights to change this article.",
    );
  }
}
