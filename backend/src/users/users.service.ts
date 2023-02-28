import { User } from './entities/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      id: 0,
      Username: 'hello',
      Email: 'got@gmail.com',
      Password: '1234',
      RoleId: '1',
      Created_at: new Date(),
    },
  ];

  findByEmail(Email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.Email === Email);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }

  findOne(id: number): Promise<User | undefined> {
    const user = this.users.find((user) => user.id === id);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
}
