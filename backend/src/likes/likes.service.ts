import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Like } from './entities/like.entity';
import { Trip } from '../parcours-sauvegarder/entities/parcours-sauvegarder.entity';
import { User } from 'src/users/entities/user.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
    @InjectRepository(Trip)
    private readonly parcourssauvegarderRepository: Repository<Trip>,
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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

  async updateLike(tripId: string, userId: string, updateLikeDto: any): Promise<Like> {
    let like = await this.likeRepository.findOne({ where: { trip: { Id: tripId }, user: { Id: userId } } });
    let isNewLike = false;
  
    if (!like) {
      like = new Like();
      const user = new User();
      user.Id = userId;
      like.user = user;

      const trip = new Trip();
      trip.Id = tripId;
      like.trip = trip;

      isNewLike = true;
    }
  
    const trip = await this.parcourssauvegarderRepository.findOne({ where: { Id: tripId } });
    if (!trip) {
      throw new NotFoundException(`Trip with ID ${tripId} not found`);
    }
  
    let likeAddedOrRemoved = false;
    if (updateLikeDto.isLiked) {
      if (isNewLike) {
        await this.likeRepository.save(like);
        trip.LikesNumbers += 1;
        likeAddedOrRemoved = true;
      }
    } else {
      if (!isNewLike) {
        await this.likeRepository.remove(like);
        trip.LikesNumbers -= 1;
        likeAddedOrRemoved = true;
      }
    }
  
    if (likeAddedOrRemoved) {
      await this.parcourssauvegarderRepository.save(trip);
    }
  
    return like;
  }
  


  async remove(Id: string): Promise<any> {
    return await this.likeRepository.delete(Id);
  }
}
