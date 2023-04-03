import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ParcoursSauvegarder } from './entities/parcours-sauvegarder.entity';
//import { CreateParcoursSauvegarderDto } from './dto/create-parcours-sauvegarder.dto';
import { UpdateParcoursSauvegarderDto } from './dto/update-parcours-sauvegarder.dto';


@Injectable()
export class ParcoursSauvegarderService {
  constructor(
    @InjectRepository(ParcoursSauvegarder)
    private readonly parcourssauvegarderRepository: Repository<ParcoursSauvegarder>,
  ) {}

  async create(parcoursSauvegarder: any): Promise<ParcoursSauvegarder[]> {
    const { UserId } = parcoursSauvegarder;
    console.log(ParcoursSauvegarder);
    const u = await this.parcourssauvegarderRepository.findOneBy({ UserId });
    if (u) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          error: 'name must be unique.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return await this.parcourssauvegarderRepository.save(UserId);
  }

  findAll() {
    return `This action returns all ParcoursSauvegarder`;
  }

  findOne(id: string) {
    return `This action returns a #${id} ParcoursSauvegarder`;
  }

  update(Id: string, data: any): Promise<any> {
    return this.parcourssauvegarderRepository.update(Id, data);
  }

  async remove(Id: string): Promise<any> {
    return await this.parcourssauvegarderRepository.delete(Id);
  }
}