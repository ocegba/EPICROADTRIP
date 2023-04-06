import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Trip } from './entities/parcours-sauvegarder.entity';
//import { CreateParcoursSauvegarderDto } from './dto/create-parcours-sauvegarder.dto';

@Injectable()
export class ParcoursSauvegarderService {
  constructor(
    @InjectRepository(Trip)
    private readonly parcourssauvegarderRepository: Repository<Trip>,
  ) {}

  async create(parcoursSauvegarder: any): Promise<Trip[]> {
    const { Id } = parcoursSauvegarder;
    console.log(Trip);
    const u = await this.parcourssauvegarderRepository.findOneBy({ Id });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.parcourssauvegarderRepository.save(parcoursSauvegarder);
  }

  async findAll() {
    return await this.parcourssauvegarderRepository.find();
  }

  async findAllPublicTrips(): Promise<any> {
    const trip = await this.parcourssauvegarderRepository.find({
      where: { Published: true },
    });
    if (!trip) {
      throw new NotFoundException(`Trip Public not found`);
    }
    return trip;
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
