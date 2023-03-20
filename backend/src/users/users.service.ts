import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      Id: '336DA',
      Username: 'Bob',
      userId: 'hello',
      Email: 'bob@gmail.com',
      Password: 'bobPass',
      RoleId: '336DA',
      Created_at: new Date('2023-12-05'),
    },

    {
      Id: '36fge',
      Username: 'John',
      userId: 'hello',
      Email: 'john@gmail.com',
      Password: 'johnPass',
      RoleId: '336DA',
      Created_at: new Date('2023-12-05'),
    },

    {
      Id: '36PGE',
      Username: 'Gary',
      userId: 'hello',
      Email: 'gary@gmail.com',
      Password: 'garyPass',
      RoleId: '336DA',
      Created_at: new Date('2023-12-05'),
    },
  ];

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    return `This action returns a #${id} user`;
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }

  findByEmail(email: string): Promise<User | undefined> {
    const user = this.users.find((user) => user.Email === email);
    if (user) {
      return Promise.resolve(user);
    }
    return undefined;
  }
}
