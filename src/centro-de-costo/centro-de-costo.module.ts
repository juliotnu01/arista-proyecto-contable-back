import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CentroDeCostoService } from './centro-de-costo.service';
import { CentroDeCostoController } from './centro-de-costo.controller';
import { CentroCosto } from './entities/centro-de-costo.entity';
@Module({
  imports: [TypeOrmModule.forFeature([CentroCosto])],
  controllers: [CentroDeCostoController],
  providers: [CentroDeCostoService],
})
export class CentroDeCostoModule {}
