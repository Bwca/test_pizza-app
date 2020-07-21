import { UserDto } from '../../shared/dto/user/user.dto';

interface UserDbRecord extends UserDto {
  password: string;
}

export const USERS_MOCKUP: UserDbRecord[] = [
  {
    id: 11,
    username: 'John Doe',
    login: 'some-user',
    password: 'unsafe-password',
  },
];
