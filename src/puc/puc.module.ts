import { Module } from '@nestjs/common';
import { PucService } from './puc.service';
import { PucController } from './puc.controller';

@Module({
  controllers: [PucController],
  providers: [PucService],
})
export class PucModule {}
