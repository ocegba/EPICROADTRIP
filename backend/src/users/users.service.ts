import { Injectable, HttpException, HttpStatus, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
const saltRounds = 10;
@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  async create(user: any): Promise<User[]> {
    const { Username, Password, Email } = user;

    const u = await this.usersRepository.findOneBy({ Username });
    const email = await this.usersRepository.findOneBy({ Email });
    if (u) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Username must be unique. Username existe déjà dans la base de donnée.',
          error: 'Input data validation failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (email) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Email must be unique. Email existe déjà dans la base de donnée.',
          error: 'Input data validation failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    if (!Password) {
      throw new HttpException(
        {
          statusCode: HttpStatus.BAD_REQUEST,
          message: 'Password is required. Mot de passe requis.',
          error: 'Input data validation failed',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    user.Password = await this.hashPassword(Password);
    return await this.usersRepository.save(user);
  }

  async hashPassword(p_password: string): Promise<any> {
    if (!p_password) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'password is required.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(p_password, salt);
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
