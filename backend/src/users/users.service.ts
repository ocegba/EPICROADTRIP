import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(user: any): Promise<User[]> {
    const { Username } = user;
    console.log(Username);
    const u = await this.usersRepository.findOneBy({ Username });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.usersRepository.save(user);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(Id: string): Promise<any> {
    const user = await this.usersRepository.findOne({ where: { Id: Id } });
    if (!user) {
      throw new NotFoundException(`User with ID "${Id}" not found`);
    }
    return user
  }

  async update(Id: string, data: any): Promise<any> {
    return await this.usersRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.usersRepository.delete(Id);
  }

  async findByEmail(Email: string): Promise<User | undefined> {
    return await this.usersRepository.findOneBy({ Email });
  }
}