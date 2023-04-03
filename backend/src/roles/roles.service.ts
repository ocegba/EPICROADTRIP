import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from './entities/role.entity';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';


@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private readonly createRoleDto: Repository<CreateRoleDto>,
  ) {}

  async create(role: any): Promise<Role[]> {
    const { Name } = role;
    console.log(Name);
    const u = await this.roleRepository.findOneBy({ Name });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.roleRepository.save(Name);
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: string) {
    return `This action returns a #${id} role`;
  }

  update(Id: string, data: any): Promise<any> {
    return this.roleRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.roleRepository.delete(Id);
  }
}