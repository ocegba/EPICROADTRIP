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

  async findOne(Id: string): Promise<any> {
    const trip = await this.parcourssauvegarderRepository.findOne({
      where: { Id: Id },
    });
    if (!trip) {
      throw new NotFoundException(`User with ID "${Id}" not found`);
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
