import {  IsNumber, IsOptional } from 'class-validator';
import { CreateAsientoContableDto } from './create-asientos-contable.dto';
export class UpdateAsientoContableDto extends CreateAsientoContableDto {
    @IsNumber()
    @IsOptional() // Hacemos que asco_id sea opcional
    asco_id?: number;
  }