import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '~/shared/module/user.entity';
import { UsersService } from '~/users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { RefreshTokenEntity } from '~/shared/module/refresh-token.entity';
import { JwtStrategy } from './jwt/jwt.strategy';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, RefreshTokenEntity]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: +process.env.Expires_JWT_Token },
    }),
  ],
  exports: [AuthService, JwtModule],
  providers: [AuthService, UsersService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
