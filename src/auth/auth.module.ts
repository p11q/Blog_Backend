import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '~/shared/module/user.entity';
import { UsersService } from '~/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenEntity } from '~/shared/module/refresh-token.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '600s' },
    }),
  ],
  exports: [AuthService],
  providers: [AuthService, UsersService],
  controllers: [AuthController],
})
export class AuthModule {}
