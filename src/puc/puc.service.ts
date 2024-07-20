import { Injectable } from '@nestjs/common';
import { CreatePucDto } from './dto/create-puc.dto';
import { UpdatePucDto } from './dto/update-puc.dto';

@Injectable()
export class PucService {
  create(createPucDto: CreatePucDto) {
    return 'This action adds a new puc';
  }

  findAll() {
    return `This action returns all puc`;
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
