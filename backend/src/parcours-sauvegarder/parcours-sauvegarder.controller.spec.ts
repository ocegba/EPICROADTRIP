import { Test, TestingModule } from '@nestjs/testing';
import { ParcoursSauvegarderController } from './parcours-sauvegarder.controller';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';

describe('ParcoursSauvegarderController', () => {
  let controller: ParcoursSauvegarderController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParcoursSauvegarderController],
      providers: [ParcoursSauvegarderService],
    }).compile();

    controller = module.get<ParcoursSauvegarderController>(
      ParcoursSauvegarderController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
