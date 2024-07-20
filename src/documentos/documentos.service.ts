import { Injectable } from '@nestjs/common';
import { CreateDocumentoDto } from './dto/create-documento.dto';
import { UpdateDocumentoDto } from './dto/update-documento.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Documento } from './entities/documento.entity';


@Injectable()
export class DocumentosService {

  constructor(@InjectRepository(Documento) private readonly documentoRepository: Repository<Documento>) {}

  create(createDocumentoDto: CreateDocumentoDto) {
    const documento = this.documentoRepository.create(createDocumentoDto);
    return this.documentoRepository.save(documento);
  }

  findAll(): Promise<Documento[]> {
    return this.documentoRepository.find({relations: ['asientos_contables', 'periodo', 'tipoDocummento']});
  }

  findOne(id: number) {
    return `This action returns a #${id} documento`;
  }

  async update(id: number, updateDocumentoDto: UpdateDocumentoDto) {
    const documento = await this.documentoRepository.findOneBy({ docu_id: id });
    if (!documento) {
      throw new Error('Documento no encontrado');
    }
    this.documentoRepository.merge(documento, updateDocumentoDto);
    return this.documentoRepository.save(documento);
  }

  remove(id: number) {
    return `This action removes a #${id} documento`; 
  }
}
