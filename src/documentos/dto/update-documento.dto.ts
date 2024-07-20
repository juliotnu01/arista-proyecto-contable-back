import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { CreateDocumentoDto } from './create-documento.dto';

export class UpdateDocumentoDto extends CreateDocumentoDto {
    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    docu_id?: number;
  }