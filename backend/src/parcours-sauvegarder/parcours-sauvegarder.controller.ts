import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';

@Controller('parcours-sauvegarder')
export class ParcoursSauvegarderController {
  constructor(
    private readonly parcoursSauvegarderService: ParcoursSauvegarderService,
  ) {}

  @Post()
  async create(@Body() param: any) {
    const newParam = { ...param, status: true };
    try {
      return {
        message: 'Successfully create one ParcoursSauvegarder',
        data: await this.parcoursSauvegarderService.create(newParam),
      };
    } catch (err) {
      console.log('error', err);
    }
  }

  @Get()
  findAll() {
    return this.parcoursSauvegarderService.findAll();
  }

  @Get('/trips')
  findAllPublicTrip() {
    return this.parcoursSauvegarderService.findAllPublicTrips();
  }

  @Get('/user/:id')
  findAllByUserId(@Param('id') id: string) {
    return this.parcoursSauvegarderService.findAllByUserId(id);
  }

  @Get(':id')
  findOneByTrip(@Param('id') id: string) {
    return this.parcoursSauvegarderService.findOneByTripId(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateLikeDto: any) {
    return this.parcoursSauvegarderService.update(id, updateLikeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.parcoursSauvegarderService.remove(id);
  }
}
