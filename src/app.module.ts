import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticalsModule } from './articales/articales.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'pass123',
      database: 'nestjs_blog',
      synchronize: false,
    }),
    UsersModule,
    ArticalsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
