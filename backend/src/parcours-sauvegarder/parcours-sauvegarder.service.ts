import { Injectable } from '@nestjs/common';
import { CreateParcoursSauvegarderDto } from './dto/create-parcours-sauvegarder.dto';
import { UpdateParcoursSauvegarderDto } from './dto/update-parcours-sauvegarder.dto';

@Injectable()
export class ParcoursSauvegarderService {
  create(createParcoursSauvegarderDto: CreateParcoursSauvegarderDto) {
    return 'This action adds a new parcoursSauvegarder';
  }

  findAll() {
    return `This action returns all parcoursSauvegarder`;
  }

  findOne(id: number) {
    return `This action returns a #${id} parcoursSauvegarder`;
  }

  update(id: number, updateParcoursSauvegarderDto: UpdateParcoursSauvegarderDto) {
    return `This action updates a #${id} parcoursSauvegarder`;
  }

  remove(id: number) {
    return `This action removes a #${id} parcoursSauvegarder`;
  }
}
