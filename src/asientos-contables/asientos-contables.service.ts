import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAsientoContableDto } from './dto/create-asientos-contable.dto';
import { UpdateAsientoContableDto } from './dto/update-asientos-contable.dto';
import { AsientosContable } from './entities/asientos-contable.entity';

@Injectable()
export class AsientosContablesService {
  constructor(
    @InjectRepository(AsientosContable)
    private readonly AsientoContableRepository: Repository<AsientosContable>,
  ) {}

  async create( createAsientoContableDto: CreateAsientoContableDto, ): Promise<AsientosContable> {
    const asientoContable = this.AsientoContableRepository.create(createAsientoContableDto);
    return this.AsientoContableRepository.save(asientoContable);
  }

  findAll() {
    return this.AsientoContableRepository.find({ relations: ['documento'] });
  }

  findOne(id: number) {
    return `This action returns a #${id} asientosContable`;
  }

  async update( id: number, updateAsientoContableDto: UpdateAsientoContableDto, ): Promise<AsientosContable> {
    const asientoContable = await this.AsientoContableRepository.findOneBy({ asco_id: id });
    if (!asientoContable) {
      throw new Error('Asiento contable no encontrado');
    }
    this.AsientoContableRepository.merge( asientoContable, updateAsientoContableDto,);
    return this.AsientoContableRepository.save(asientoContable);
  }

  remove(id: number) {
    return `This action removes a #${id} asientosContable`;
  }
}
