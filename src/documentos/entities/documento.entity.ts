
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { AsientosContable } from 'src/asientos-contables/entities/asientos-contable.entity';

@Entity('documentos')
export class Documento {
  @PrimaryGeneratedColumn()
  docu_id: number;

  @Column()
  tido_id: number;

  @Column()
  peri_id: number;

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
