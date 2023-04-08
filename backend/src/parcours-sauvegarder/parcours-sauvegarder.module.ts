import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';
import { ParcoursSauvegarderController } from './parcours-sauvegarder.controller';
import { Trip } from './entities/parcours-sauvegarder.entity';
import { Like } from '../likes/entities/like.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trip, Like])],
  controllers: [ParcoursSauvegarderController],
  providers: [ParcoursSauvegarderService],
})
export class ParcoursSauvegarderModule {}
