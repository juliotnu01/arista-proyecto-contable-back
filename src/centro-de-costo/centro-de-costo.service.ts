import { Injectable } from '@nestjs/common';
import { CreateCentroDeCostoDto } from './dto/create-centro-de-costo.dto';
import { UpdateCentroDeCostoDto } from './dto/update-centro-de-costo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CentroCosto } from './entities/centro-de-costo.entity';


@Injectable()
export class CentroDeCostoService {

  constructor(@InjectRepository(CentroCosto) private readonly CentroCostoRepository: Repository<CentroCosto>){}

  create(createCentroDeCostoDto: CreateCentroDeCostoDto) {
    return 'This action adds a new centroDeCosto';
  }

  findAll() {
    return this.CentroCostoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} centroDeCosto`;
  }

  update(id: number, updateCentroDeCostoDto: UpdateCentroDeCostoDto) {
    return `This action updates a #${id} centroDeCosto`;
  }

  remove(id: number) {
    return `This action removes a #${id} centroDeCosto`;
  }
}
