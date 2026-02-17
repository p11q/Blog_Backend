import { Injectable } from '@nestjs/common';
import { CreateArticaleDto } from './dto/creat-article.dto';
import { ArticaleDto } from './dto/article.dto';

@Injectable()
export class ArticalsService {
  create(data: CreateArticaleDto) {
    const articale = new ArticaleDto();
    articale.title = data.title;
    articale.text = data.text;
    articale.description = data.description;
    articale.tags = data.tags;
    articale.createAt = new Date();
    articale.updateAt = new Date();
    return articale;
  }

  getList() {
    console.log('Method: getList');
  }

  getById(id: number) {
    console.log(`Method: getByID ${id}`);
  }

  updateById(id: number) {
    console.log(`Method: updateByID ${id}`);
  }

  deleteById(id: number) {
    console.log(`Method: deleteByID ${id}`);
  }
}
