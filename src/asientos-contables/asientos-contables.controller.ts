import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { AsientosContablesService } from './asientos-contables.service';
import { CreateAsientoContableDto } from './dto/create-asientos-contable.dto';
import { UpdateAsientoContableDto } from './dto/update-asientos-contable.dto';

@Controller('asientos-contables')
export class AsientosContablesController {
  constructor(private readonly asientosContablesService: AsientosContablesService) {}

  @Post()
  create(@Body() CreateAsientoContableDto: CreateAsientoContableDto) {
    return this.asientosContablesService.create(CreateAsientoContableDto);
  }

  @Get()
  findAll() {
    return this.asientosContablesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.asientosContablesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() UpdateAsientoContableDto: UpdateAsientoContableDto) {
    return this.asientosContablesService.update(+id, UpdateAsientoContableDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.asientosContablesService.remove(+id);
  }
}
