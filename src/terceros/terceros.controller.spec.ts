import { Test, TestingModule } from '@nestjs/testing';
import { TercerosController } from './terceros.controller';
import { TercerosService } from './terceros.service';

describe('TercerosController', () => {
  let controller: TercerosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TercerosController],
      providers: [TercerosService],
    }).compile();

    controller = module.get<TercerosController>(TercerosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
