import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async create(createLikeDto: any): Promise<Like[]> {
    const { Like } = createLikeDto;
    console.log(Like);
    return await this.likeRepository.save(createLikeDto);
  }

  async findAll() {
    return await this.likeRepository.find();
  }

  async findOne(Id: string): Promise<any> {
    const like = await this.likeRepository.findOne({ where: { Id: Id } });
    if (!like) {
      throw new NotFoundException(`User with ID "${Id}" not found`);
    }
    return like;
  }

  update(Id: string, data: any): Promise<any> {
    return this.likeRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.likeRepository.delete(Id);
  }
}
