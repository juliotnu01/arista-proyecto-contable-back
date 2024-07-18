import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Documento } from 'src/documentos/entities/documento.entity';

@Entity('asiento_contable')
export class AsientosContable {
  
  @PrimaryGeneratedColumn()
  asco_id: number;

  @Column()
  docu_id: number;

  @Column()
  terc_id: number;

  @Column()
  puc_id: number;

  @Column({ nullable: true })
  rubr_id?: number;

  @Column({ nullable: true })
  ceco_id?: number;

  @Column({ nullable: true })
  banc_id?: number;

  @Column({ nullable: true })
  mepa_id?: number;

  @Column({ nullable: true })
  fact_id?: number;

  @Column({ nullable: true })
  user_id?: number;

  @Column({ type: 'varchar', length: 255, nullable: true })
  asco_conc?: string;

  @Column({ type: 'tinyint', nullable: true })
  asco_actif?: number;

  @Column({ type: 'varchar', length: 50, nullable: true })
  asco_transn?: string;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0 })
  asco_debi: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, default: 0 })
  asco_cred: number;

  @Column({ type: 'decimal', precision: 20, scale: 6, nullable: true })
  asco_base?: number;

  @ManyToOne(() => Documento)
  @JoinColumn({ name: 'docu_id' })
  documento: Documento;
}
