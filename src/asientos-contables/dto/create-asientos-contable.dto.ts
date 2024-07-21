import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateAsientoContableDto {
  @IsNumber()
  @IsOptional()
  @IsNotEmpty()
  docu_id?: number;

  @IsNumber()
  @IsNotEmpty()
  terc_id: number;

  @IsNumber()
  @IsNotEmpty()
  puc_id: number;

  @IsOptional()
  @IsNumber()
  rubr_id?: number;

  @IsOptional()
  @IsNumber()
  ceco_id?: number;

  @IsOptional()
  @IsNumber()
  banc_id?: number;

  @IsOptional()
  @IsNumber()
  mepa_id?: number;

  @IsOptional()
  @IsNumber()
  fact_id?: number;

  @IsOptional()
  @IsNumber()
  user_id?: number;

  @IsOptional()
  @IsString()
  asco_conc?: string;

  @IsOptional()
  @IsNumber()
  asco_actif?: number;

  @IsOptional()
  @IsString()
  asco_transn?: string;

  @IsNumber()
  @IsNotEmpty()
  asco_debi: number;

  @IsNumber()
  @IsNotEmpty()
  asco_cred: number;

  @IsOptional()
  @IsNumber()
  asco_base?: number;
}
