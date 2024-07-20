import { IsNotEmpty, IsNumber, IsString, IsDate, IsOptional } from 'class-validator';
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

  @IsDate()
  @Type(() => Date) // Asegura que se convierta a una instancia de Date
  @IsNotEmpty()
  docu_fech: Date;

  @IsNumber()
  @IsOptional()
  docu_debi: number;

  @IsNumber()
  @IsOptional()
  docu_cred: number;
}
