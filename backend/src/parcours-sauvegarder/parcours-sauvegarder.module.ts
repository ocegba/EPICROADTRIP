import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';
import { ParcoursSauvegarderController } from './parcours-sauvegarder.controller';
import { ParcoursSauvegarder } from './entities/parcours-sauvegarder.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ParcoursSauvegarder])],
  controllers: [ParcoursSauvegarderController],
  providers: [ParcoursSauvegarderService],
})
export class ParcoursSauvegarderModule {}
