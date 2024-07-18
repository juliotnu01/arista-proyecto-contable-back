// asientos-contables.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsientosContable } from './entities/asientos-contable.entity';
import { AsientosContablesController } from './asientos-contables.controller';
import { AsientosContablesService } from './asientos-contables.service';

@Module({
  imports: [TypeOrmModule.forFeature([AsientosContable])],
  controllers: [AsientosContablesController],
  providers: [AsientosContablesService],
})
export class AsientosContablesModule {}
