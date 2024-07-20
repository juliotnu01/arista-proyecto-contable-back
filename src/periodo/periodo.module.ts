import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Periodo } from './entities/periodo.entity';
import { PeriodoService } from './periodo.service';
import { PeriodoController } from './periodo.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Periodo])],
  controllers: [PeriodoController],
  providers: [PeriodoService],
})
export class PeriodoModule {}
