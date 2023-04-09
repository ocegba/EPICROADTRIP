import {
  Controller,
  Get,
  Post,
  Put,
  Body,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { LikesService } from './likes.service';

@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @Post()
  async create(@Body() param: any) {
    const newParam = { ...param, status: true };
    try {
      return {
        message: 'Successfully create one like',
        data: await this.likesService.create(newParam),
      };
    } catch (err) {
      console.log('error', err);
    }
  }

  @Get()
  findAll() {
    return this.likesService.findAll();
  }

  @Get(':id')
  findLikesById(@Param('id') id: string) {
    return this.likesService.findLikesById(id);
  }

  @Get('/user/:userId')
  async findLikesByUserId(@Param('userId') userId: string) {
    const likes = await this.likesService.findLikesByUserId(userId);
    return { likes };
  }

/*   @Get(':userId/:tripId/liked')
  async userLikedTrip(@Param('userId') userId: string, @Param('tripId') tripId: string): Promise<{ liked: boolean }> {
    const liked = await this.likesService.userLikedTrip(userId, tripId);
    return { liked };
  } */
  

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: any) {
    return this.likesService.update(id, updateLikeDto);
  }

  @Put('/trip/:tripId/user/:userId')
  async updateLike(
    @Param('tripId') tripId: string,
    @Param('userId') userId: string,
    @Body() updateLikeDto: any,
  ) {
    try {
      const like = await this.likesService.updateLike(
        tripId,
        userId,
        updateLikeDto,
      );
      return { message: 'Like updated successfully', like };
    } catch (err) {
      if (err instanceof NotFoundException) {
        return { error: err.message };
      }
      throw err;
    }
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.likesService.remove(id);
  }
}
