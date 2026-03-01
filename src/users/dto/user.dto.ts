import { UserEntity } from '~/shared/module/user.entity';

export class UserDto {
  id: number;
  name: string;
  email: string;
  role: string;

  constructor(data: UserEntity) {
    this.id = data.id;
    this.name = data.name;
    this.email = data.email;
    this.role = data.role;
  }
}
