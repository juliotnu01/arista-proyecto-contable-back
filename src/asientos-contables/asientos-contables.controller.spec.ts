import { Test, TestingModule } from '@nestjs/testing';
import { AsientosContablesController } from './asientos-contables.controller';
import { AsientosContablesService } from './asientos-contables.service';

describe('AsientosContablesController', () => {
  let controller: AsientosContablesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AsientosContablesController],
      providers: [AsientosContablesService],
    }).compile();

    controller = module.get<AsientosContablesController>(AsientosContablesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
