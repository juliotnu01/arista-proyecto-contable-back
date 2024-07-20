import { PartialType } from '@nestjs/mapped-types';
import { CreateCentroDeCostoDto } from './create-centro-de-costo.dto';

export class UpdateCentroDeCostoDto extends PartialType(CreateCentroDeCostoDto) {}
