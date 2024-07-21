
import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from 'typeorm';
import { AsientosContable } from 'src/asientos-contables/entities/asientos-contable.entity';
import { Periodo } from 'src/periodo/entities/periodo.entity';
import { TipoDocumento } from 'src/tipo_documento/entities/tipo_documento.entity';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  docu_id: number;

  @Column()
  tido_id: number;

  @Column({ nullable: true })
  peri_id: number;

  @ManyToOne(() => Periodo)
  @JoinColumn({ name: 'peri_id' }) 
  periodo: Periodo;

  @ManyToOne(() => TipoDocumento)
  @JoinColumn({ name: 'tido_id' })
  tipoDocummento: TipoDocumento;

  @Column({ length: 20 })
  docu_nume: string;

  @Column({ type: 'date' })
  docu_fech: Date;

  @Column('decimal', { precision: 20, scale: 6, default: 0 })
  docu_debi: number;

  @Column('decimal', { precision: 20, scale: 6, default: 0 })
  docu_cred: number;

  @OneToMany(() => AsientosContable, asientosContable => asientosContable.documento)
  asientos_contables: AsientosContable[];
}
