import { Controller, Get, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserDto } from './dto/user.dto';
import { AuthGuard } from '~/guards/auth.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly UserService: UsersService) {}

  @Get('me')
  @UseGuards(AuthGuard)
  async getMe(@Request() req): Promise<UserDto> {
    const user = await this.UserService.getUserById(req.user?.id);
    return new UserDto(user);
  }
}
