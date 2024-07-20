import { Test, TestingModule } from '@nestjs/testing';
import { CentroDeCostoController } from './centro-de-costo.controller';
import { CentroDeCostoService } from './centro-de-costo.service';

describe('CentroDeCostoController', () => {
  let controller: CentroDeCostoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CentroDeCostoController],
      providers: [CentroDeCostoService],
    }).compile();

    controller = module.get<CentroDeCostoController>(CentroDeCostoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
