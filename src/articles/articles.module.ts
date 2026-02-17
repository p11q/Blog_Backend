import { Module } from '@nestjs/common';
import { ArticalsService } from './articles.service';
import { ArticalsController } from './articels.controller';

@Module({
  providers: [ArticalsService],
  controllers: [ArticalsController],
})
export class ArticalsModule {}
