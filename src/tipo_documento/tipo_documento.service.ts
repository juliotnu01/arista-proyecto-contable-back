import { Injectable } from '@nestjs/common';
import { CreateTipoDocumentoDto } from './dto/create-tipo_documento.dto';
import { UpdateTipoDocumentoDto } from './dto/update-tipo_documento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoDocumento } from './entities/tipo_documento.entity';


@Injectable()
export class TipoDocumentoService {

  constructor(@InjectRepository(TipoDocumento) private readonly TipoDocumentoRepository: Repository<TipoDocumento>){}

  create(createTipoDocumentoDto: CreateTipoDocumentoDto) {
    return 'This action adds a new tipoDocumento';
  }

  findAll() {
    return this.TipoDocumentoRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} tipoDocumento`;
  }

  update(id: number, updateTipoDocumentoDto: UpdateTipoDocumentoDto) {
    return `This action updates a #${id} tipoDocumento`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipoDocumento`;
  }
}
