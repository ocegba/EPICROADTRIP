import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';
import { ParcoursSauvegarderController } from './parcours-sauvegarder.controller';
import { Trip } from './entities/parcours-sauvegarder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Trip])],
  controllers: [ParcoursSauvegarderController],
  providers: [ParcoursSauvegarderService],
})
export class ParcoursSauvegarderModule {}
