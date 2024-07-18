import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsientosContableDto } from './dto/create-asientos-contable.dto';
import { UpdateAsientosContableDto } from './dto/update-asientos-contable.dto';
import { AsientosContable } from './entities/asientos-contable.entity';

@Injectable()
export class AsientosContablesService {

  constructor(@InjectRepository(AsientosContable) private readonly AsientoContableRepository: Repository<AsientosContable>) {}

  create(createAsientosContableDto: CreateAsientosContableDto) {
    return 'This action adds a new asientosContable';
  } 

  findAll() {
    return this.AsientoContableRepository.find({ relations: ['documento'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} asientosContable`;
  }

  update(id: number, updateAsientosContableDto: UpdateAsientosContableDto) {
    return `This action updates a #${id} asientosContable`;
  }

  remove(id: number) {
    return `This action removes a #${id} asientosContable`;
  }
}
