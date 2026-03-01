import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from '~/users/users.service';
import { SignInDto } from './dto/sign-in.dto';
import { SignInResponceDto } from './dto/sign-in-resp.dto';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { SignUpDto } from './dto/sign-up.dto';
import { UserEntity } from '~/shared/module/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async signIn(data: SignInDto): Promise<SignInResponceDto> {
    const user = await this.userService.getUserByEmail(data.email);

    if (!user) {
      throw new BadRequestException('User not found');
    }

    const isPasswordValid = await bcrypt.compare(
      data.password,
      (await user).password,
    );
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid Password');
    }

    return this.getTokens(user);
  }

  async signUp(data: SignUpDto): Promise<SignInResponceDto> {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
    if (!isEmailValid) {
      throw new BadRequestException('Invalid email');
    }

    const user = await this.userService.getUserByEmail(data.email);
    if (user) {
      throw new BadRequestException('User already exists');
    }

    const hashPass = await bcrypt.hash(data.password, 10);

    const userCreate = await this.userService.createUser(
      data.name,
      data.email,
      hashPass,
    );
    return this.getTokens(userCreate);
  }

  async getTokens(user: UserEntity): Promise<SignInResponceDto> {
    const payload = {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
    };

    const accessToken = await this.jwtService.signAsync(payload);
    return new SignInResponceDto(accessToken, 'refreshToken');
  }
}
