import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TercerosService } from './terceros.service';
import { CreateTerceroDto } from './dto/create-tercero.dto';
import { UpdateTerceroDto } from './dto/update-tercero.dto';

@Controller('terceros')
export class TercerosController {
  constructor(private readonly tercerosService: TercerosService) {}

  @Post()
  create(@Body() createTerceroDto: CreateTerceroDto) {
    return this.tercerosService.create(createTerceroDto);
  }

  @Get()
  findAll() {
    return this.tercerosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tercerosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTerceroDto: UpdateTerceroDto) {
    return this.tercerosService.update(+id, updateTerceroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tercerosService.remove(+id);
  }
}
