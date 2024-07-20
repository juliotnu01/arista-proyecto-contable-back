import { PartialType } from '@nestjs/mapped-types';
import { CreatePucDto } from './create-puc.dto';

export class UpdatePucDto extends PartialType(CreatePucDto) {}
