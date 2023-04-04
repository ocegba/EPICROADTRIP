import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  HttpStatus,
  HttpException,
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
      const data = await this.usersService.create(newParam);
      return {
        message: 'Successfully create user profile',
        data: data,
      };
    } catch (err) {
      if (err.response) {
        throw new HttpException(
          {
            status: err.response.statusCode,
            message: err.response.message,
            error: err.response.error,
          },
          err.response.status,
        );
      } else {
        throw new HttpException(
          {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: 'Internal server error',
          },
          HttpStatus.INTERNAL_SERVER_ERROR,
        );
      }
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
