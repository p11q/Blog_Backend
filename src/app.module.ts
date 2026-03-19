import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { ArticalsModule } from './articles/articles.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from '../db/data-source';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';

console.log('ConfigModule loaded:', !!ConfigModule); // Проверка загрузки

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    UsersModule,
    ArticalsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
  ],
})
export class AppModule {}
