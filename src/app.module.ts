// app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentosModule } from './documentos/documentos.module';
import { AsientosContablesModule } from './asientos-contables/asientos-contables.module';
import { PeriodoModule } from './periodo/periodo.module';
import { TipoDocumentoModule } from './tipo_documento/tipo_documento.module';
import { PucModule } from './puc/puc.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'asdasdasd',
      database: 'arista_db',
      synchronize: true,
      autoLoadEntities: true,
    }),
    DocumentosModule,
    AsientosContablesModule,
    PeriodoModule,
    TipoDocumentoModule,
    PucModule,
  ],
})
export class AppModule {}
