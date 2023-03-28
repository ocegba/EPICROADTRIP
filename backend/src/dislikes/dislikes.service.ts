import { Injectable } from '@nestjs/common';
import { CreateDislikeDto } from './dto/create-dislike.dto';
import { UpdateDislikeDto } from './dto/update-dislike.dto';

@Injectable()
export class DislikesService {
  async create(createDislikeDto: any): Promise<CreateDislikeDto[]> {
    const { DisLike } = createDislikeDto;
    console.log(DisLike);
    const u = await this.dislikeRepository.findOneBy({ DisLike });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.dislikeRepository.save(DisLike);
  }

  findAll() {
    return `This action returns all dislikes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} dislike`;
  }

  update(Id: string, data: any): Promise<any> {
    return this.dislikeRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.dislikeRepository.delete(Id);
  }
}