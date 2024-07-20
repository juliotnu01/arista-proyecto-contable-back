import { Injectable } from '@nestjs/common';
import { CreatePeriodoDto } from './dto/create-periodo.dto';
import { UpdatePeriodoDto } from './dto/update-periodo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Periodo } from './entities/periodo.entity';

@Injectable()
export class PeriodoService {

  constructor(@InjectRepository(Periodo) private readonly PeriodoRepository: Repository<Periodo>) {}

  create(createPeriodoDto: CreatePeriodoDto) {
    return 'This action adds a new periodo';
  }

  findAll() {
    return this.PeriodoRepository.find({ where: { peri_status: 1 } });
  }

  findOne(id: number) {
    return `This action returns a #${id} periodo`;
  }

  update(id: number, updatePeriodoDto: UpdatePeriodoDto) {
    return `This action updates a #${id} periodo`;
  }

  remove(id: number) {
    return `This action removes a #${id} periodo`;
  }
}
