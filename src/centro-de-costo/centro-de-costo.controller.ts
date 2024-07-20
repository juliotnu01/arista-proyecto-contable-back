import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CentroDeCostoService } from './centro-de-costo.service';
import { CreateCentroDeCostoDto } from './dto/create-centro-de-costo.dto';
import { UpdateCentroDeCostoDto } from './dto/update-centro-de-costo.dto';

@Controller('centro-de-costo')
export class CentroDeCostoController {
  constructor(private readonly centroDeCostoService: CentroDeCostoService) {}

  @Post()
  create(@Body() createCentroDeCostoDto: CreateCentroDeCostoDto) {
    return this.centroDeCostoService.create(createCentroDeCostoDto);
  }

  @Get()
  findAll() {
    return this.centroDeCostoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.centroDeCostoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCentroDeCostoDto: UpdateCentroDeCostoDto) {
    return this.centroDeCostoService.update(+id, updateCentroDeCostoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.centroDeCostoService.remove(+id);
  }
}
