import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PucService } from './puc.service';
import { CreatePucDto } from './dto/create-puc.dto';
import { UpdatePucDto } from './dto/update-puc.dto';

@Controller('puc')
export class PucController {
  constructor(private readonly pucService: PucService) {}

  @Post()
  create(@Body() createPucDto: CreatePucDto) {
    return this.pucService.create(createPucDto);
  }

  @Get()
  findAll() {
    return this.pucService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pucService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePucDto: UpdatePucDto) {
    return this.pucService.update(+id, updatePucDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pucService.remove(+id);
  }
}
