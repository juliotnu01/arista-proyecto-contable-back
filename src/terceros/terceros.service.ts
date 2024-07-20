import { Injectable } from '@nestjs/common';
import { CreateTerceroDto } from './dto/create-tercero.dto';
import { UpdateTerceroDto } from './dto/update-tercero.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Tercero } from './entities/tercero.entity';


@Injectable()
export class TercerosService {
  constructor(@InjectRepository(Tercero) private readonly TerceroRepository: Repository<Tercero>){}
  create(createTerceroDto: CreateTerceroDto) {
    return 'This action adds a new tercero';
  }

  findAll() {
    return this.TerceroRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tercero`;
  }

  update(id: number, updateTerceroDto: UpdateTerceroDto) {
    return `This action updates a #${id} tercero`;
  }

  remove(id: number) {
    return `This action removes a #${id} tercero`;
  }
}
