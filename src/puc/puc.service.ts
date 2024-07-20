import { Injectable } from '@nestjs/common';
import { CreatePucDto } from './dto/create-puc.dto';
import { UpdatePucDto } from './dto/update-puc.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Puc } from './entities/puc.entity';
@Injectable()
export class PucService {

  constructor(@InjectRepository(Puc) private readonly PucRepository: Repository<Puc>){}

  create(createPucDto: CreatePucDto) {
    return 'This action adds a new puc';
  }

  findAll() {
    return this.PucRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} puc`;
  }

  update(id: number, updatePucDto: UpdatePucDto) {
    return `This action updates a #${id} puc`;
  }

  remove(id: number) {
    return `This action removes a #${id} puc`;
  }
}
