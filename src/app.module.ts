import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ArticalsModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './auth/auth.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ArticalsModule,
    AuthModule,
    CommentsModule,
  ],
})
export class AppModule {}
