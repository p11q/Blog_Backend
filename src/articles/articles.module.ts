import { Module } from '@nestjs/common';
import { ArticalsService } from './articles.service';
import { ArticalsController } from './articels.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ArticleEntity } from '~/shared/module/article.entity';
import { UserEntity } from '~/shared/module/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ArticleEntity, UserEntity])],
  providers: [ArticalsService],
  controllers: [ArticalsController],
})
export class ArticalsModule {}
