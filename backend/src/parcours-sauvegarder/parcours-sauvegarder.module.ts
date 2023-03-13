import { Module } from '@nestjs/common';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';
import { ParcoursSauvegarderController } from './parcours-sauvegarder.controller';

@Module({
  controllers: [ParcoursSauvegarderController],
  providers: [ParcoursSauvegarderService]
})
export class ParcoursSauvegarderModule {}
