import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  // UseGuards,
} from '@nestjs/common';
// import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async create(@Body() param: any) {
    const newParam = { ...param, status: true };
    try {
      return {
        message: 'Successfully create user profile',
        data: await this.usersService.create(newParam),
      };
    } catch (err) {
      console.log('error', err);
    }
  }

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') Id: string) {
    return this.usersService.findOne(Id);
  }

  @Put(':id')
  update(@Param('id') Id: string, @Body() User: any) {
    return this.usersService.update(Id, User);
  }

  @Delete(':id')
  remove(@Param('id') Id: string) {
    return this.usersService.remove(Id);
  }
}
