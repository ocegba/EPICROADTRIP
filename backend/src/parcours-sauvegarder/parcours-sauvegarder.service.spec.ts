import { Test, TestingModule } from '@nestjs/testing';
import { ParcoursSauvegarderService } from './parcours-sauvegarder.service';

describe('ParcoursSauvegarderService', () => {
  let service: ParcoursSauvegarderService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParcoursSauvegarderService],
    }).compile();

    service = module.get<ParcoursSauvegarderService>(ParcoursSauvegarderService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
