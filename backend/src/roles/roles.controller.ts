import { Controller, Get, Post, Body, Put, Patch, Param, Delete } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  @Post()
  async create(@Body() param: any) {
    const newParam = { ...param, status: true };
    try {
      return {
        message: 'Successfully create one role',
        data: await this.rolesService.create(newParam),
      };
    } catch (err) {
      console.log('error', err);
    }
  }

  @Get()
  findAll() {
    return this.rolesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.rolesService.findOne(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: any) {
    return this.rolesService.update(id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rolesService.remove(id);
  }
}