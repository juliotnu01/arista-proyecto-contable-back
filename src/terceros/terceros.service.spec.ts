import { Test, TestingModule } from '@nestjs/testing';
import { TercerosService } from './terceros.service';

describe('TercerosService', () => {
  let service: TercerosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TercerosService],
    }).compile();

    service = module.get<TercerosService>(TercerosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
