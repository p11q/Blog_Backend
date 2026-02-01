import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ArticalsService } from './articales.service';

@Controller('articales')
export class ArticalsController {
  constructor(private readonly service: ArticalsService) {}

  @Post()
  create() {
    this.service.create();
  }

  @Get()
  getList() {
    this.service.getList();
  }

  @Get(':id')
  getById(@Param('id') id: number) {
    this.service.getById(id);
  }

  @Put(':id')
  updateById(@Param('id') id: number) {
    this.service.updateById(id);
  }

  @Delete(':id')
  deleteById(@Param('id') id: number) {
    this.service.deleteById(id);
  }
}
