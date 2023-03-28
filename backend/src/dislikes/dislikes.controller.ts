import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DislikesService } from './dislikes.service';
import { CreateDislikeDto } from './dto/create-dislike.dto';
import { UpdateDislikeDto } from './dto/update-dislike.dto';

@Controller('dislikes')
export class DislikesController {
  constructor(private readonly dislikesService: DislikesService) {}

  @Post()
  async create(@Body() param: any) {
    const newParam = { ...param, status: true };
    try {
      return {
        message: 'Successfully create one dislike',
        data: await this.dislikesService.create(newParam),
      };
    } catch (err) {
      console.log('error', err);
    }
  }

  @Get()
  findAll() {
    return this.dislikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.dislikesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateDislikeDto: any) {
    return this.dislikesService.update(id, updateDislikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.dislikesService.remove(id);
  }
}