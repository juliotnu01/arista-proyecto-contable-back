import { Test, TestingModule } from '@nestjs/testing';
import { CentroDeCostoService } from './centro-de-costo.service';

describe('CentroDeCostoService', () => {
  let service: CentroDeCostoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CentroDeCostoService],
    }).compile();

    service = module.get<CentroDeCostoService>(CentroDeCostoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
