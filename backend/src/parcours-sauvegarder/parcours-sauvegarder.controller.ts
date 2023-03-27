import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';
import { CreateParcoursSauvegarderDto } from './dto/create-parcours-sauvegarder.dto';
import { UpdateParcoursSauvegarderDto } from './dto/update-parcours-sauvegarder.dto';

@Controller('parcours-sauvegarder')
export class ParcoursSauvegarderController {
  constructor(private readonly parcoursSauvegarderService: ParcoursSauvegarderService) {}

  @Post()
  create(@Body() createParcoursSauvegarderDto: CreateParcoursSauvegarderDto) {
    return this.parcoursSauvegarderService.create(createParcoursSauvegarderDto);
  }

  @Get()
  findAll() {
    return this.parcoursSauvegarderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.parcoursSauvegarderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateParcoursSauvegarderDto: UpdateParcoursSauvegarderDto) {
    return this.parcoursSauvegarderService.update(+id, updateParcoursSauvegarderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcoursSauvegarderService.remove(+id);
  }
}
