import { Module } from '@nestjs/common';
import { ArticalsService } from './articales.service';
import { ArticalsController } from './articaels.controller';

@Module({
  providers: [ArticalsService],
  controllers: [ArticalsController],
})
export class ArticalsModule {}
