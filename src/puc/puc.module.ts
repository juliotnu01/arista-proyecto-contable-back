import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Puc } from './entities/puc.entity';
import { PucController } from './puc.controller';
import { PucService } from './puc.service';

@Module({
  imports: [TypeOrmModule.forFeature([Puc])],
  controllers: [PucController],
  providers: [PucService],
})
export class PucModule {}
