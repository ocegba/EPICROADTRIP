import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { CreateLikeDto } from './dto/create-like.dto';


@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}


  async create(createLikeDto: any): Promise<CreateLikeDto[]> {
    const { Like } = createLikeDto;
    console.log(Like);
    const u = await this.likeRepository.findOneBy({ Like });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.likeRepository.save(Like);
  }

  findAll() {
    return `This action returns all likes`;
  }

  findOne(id: string) {
    return `This action returns a #${id} like`;
  }

  update(Id: string, data: any): Promise<any> {
    return this.likeRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.likeRepository.delete(Id);
  }
}