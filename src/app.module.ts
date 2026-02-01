import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ArticalsModule } from './articales/articales.module';

@Module({
  imports: [UsersModule, ArticalsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
