import { IsNotEmpty, IsNumber, IsString, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';
export class CreateDocumentoDto {
  @IsNumber()
  @IsNotEmpty()
  tido_id: number;

  @IsNumber()
  @IsNotEmpty()
  peri_id: number;

  @IsString()
  @IsNotEmpty()
  docu_nume: string;

  @IsString()
  @IsNotEmpty()
  docu_fech: string;

  @IsNumber()
  @IsOptional()
  docu_debi: number;

  @IsNumber()
  @IsOptional()
  docu_cred: number;
}
