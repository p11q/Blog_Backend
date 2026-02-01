import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticalsService {
  create() {
    console.log('Method: create');
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
