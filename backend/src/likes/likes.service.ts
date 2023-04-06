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
    return await this.likeRepository.save(createLikeDto);
  }

  async findAll(): Promise<Like[]> {
    const likes = await this.likeRepository.createQueryBuilder('like')
      .leftJoinAndSelect('like.user', 'user')
      .leftJoinAndSelect('like.trip', 'trip')
      .getMany();

    return likes;
  }

  async findLikesById(id: string): Promise<Like> {
    const like = await this.likeRepository.createQueryBuilder('like')
      .leftJoinAndSelect('like.user', 'user')
      .leftJoinAndSelect('like.trip', 'trip')
      .where('like.Id = :id', { id })
      .getOne();

    if (!like) {
      throw new NotFoundException(`Like with ID "${id}" not found`);
    }

    return like;
  }

  async findLikesByUserId(userId: string): Promise<Like[]> {
    const likes = await this.likeRepository.createQueryBuilder('like')
      .leftJoinAndSelect('like.user', 'user')
      .leftJoinAndSelect('like.trip', 'trip')
      .where('user.Id = :userId', { userId })
      .getMany();

    return likes;
  }

  update(Id: string, data: any): Promise<any> {
    return this.likeRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.likeRepository.delete(Id);
  }
}
