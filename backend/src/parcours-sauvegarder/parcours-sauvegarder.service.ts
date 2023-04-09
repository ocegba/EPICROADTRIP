import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './entities/parcours-sauvegarder.entity';
import { Like } from 'src/likes/entities/like.entity';
//import { CreateParcoursSauvegarderDto } from './dto/create-parcours-sauvegarder.dto';

@Injectable()
export class ParcoursSauvegarderService {
  constructor(
    @InjectRepository(Trip)
    private readonly parcourssauvegarderRepository: Repository<Trip>,
    @InjectRepository(Like)
    private readonly likeRepository: Repository<Like>,
  ) {}

  async create(parcoursSauvegarder: any): Promise<Trip[]> {
    return await this.parcourssauvegarderRepository.save(parcoursSauvegarder);
  }

  async findAll() {
    return await this.parcourssauvegarderRepository.find();
  }

/*   async findAllPublicTrips(): Promise<any> {
    const trip = await this.parcourssauvegarderRepository.find({
      where: { Published: true },
    });
    if (!trip) {
      throw new NotFoundException(`Trip Public not found`);
    }
    return trip;
  } */

  async findAllPublicTrips(userId?: string): Promise<Trip[]> {
    let publicTrips = await this.parcourssauvegarderRepository.find({
      where: { Published: true }
    });
  
    if (userId) {
      const userLikes = await this.likeRepository.createQueryBuilder('like').leftJoinAndSelect('like.user', 'user').leftJoinAndSelect('like.trip', 'trip').where('user.Id = :userId', { userId }).getMany();;
      publicTrips = publicTrips.map(trip => ({
        ...trip,
        isLiked: !!userLikes.find(like => like.trip ? like.trip.Id === trip.Id : false),
      }));
    }  
    return publicTrips;
  }

  async findAllByUserId(userId: string): Promise<any> {
    const trip = await this.parcourssauvegarderRepository.find({
      where: { UserIdCreated: userId },
    });
    if (!trip) {
      throw new NotFoundException(`Trip with User with ID "${userId}" not found`);
    }
    return trip;
  }

  async findOneByTripId(id: string): Promise<any> {
    const trip = await this.parcourssauvegarderRepository.findOne({
      where: { Id: id },
    });
    if (!trip) {
      throw new NotFoundException(`Trip with ID "${id}" not found`);
    }
    return trip;
  }

  update(Id: string, data: any): Promise<any> {
    return this.parcourssauvegarderRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.parcourssauvegarderRepository.delete(Id);
  }
}
