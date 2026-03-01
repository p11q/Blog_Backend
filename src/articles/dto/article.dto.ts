import { ArticleEntity } from '~/shared/module/article.entity';
import { UserEntity } from '~/shared/module/user.entity'; // добавьте импорт

export class ArticaleDto {
  id: number;
  title: string;
  text: string;
  description: string;
  tags: string;
  createAt: Date;
  updateAt: Date;
  author?: UserEntity;

  constructor(ent: ArticleEntity) {
    this.id = ent.id;
    this.title = ent.title;
    this.text = ent.text;
    this.description = ent.description;
    this.tags = ent.tags;
    this.createAt = ent.createAt;
    this.updateAt = ent.updateAt;
    this.author = ent.author;
  }
}
