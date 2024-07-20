import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('puc')
export class Puc {
  @PrimaryGeneratedColumn()
  puc_id: number;

  @Column({ type: 'int', nullable: true })
  puc_tipo: number;

  @Column({ type: 'int', nullable: true })
  puc_nive: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  puc_niveu: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  puc_nivet: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  puc_codi: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  puc_nomb: string;

  @Column({ type: 'varchar', length: 10, nullable: true })
  puc_abre: string;

  @Column({ type: 'tinyint', nullable: true })
  puc_status: number;

  @Column({ type: 'int', nullable: true })
  puc_terc: number;

  @Column({ type: 'tinyint', nullable: true })
  puc_ccost: number;

  @Column({ type: 'tinyint', nullable: true })
  puc_pres: number;

  @Column({ type: 'varchar', length: 2, nullable: true })
  puc_nomi: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  puc_moda: string;

  @Column({ type: 'tinyint', nullable: true })
  puc_corr: number;

  @Column({ type: 'tinyint', nullable: true })
  puc_fina: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  puc_cier: string;

  @Column({ type: 'decimal', precision: 18, scale: 5, nullable: true })
  puc_porc: number;

  @Column({ type: 'tinyint', nullable: true })
  puc_cart: number;

  @Column({ type: 'tinyint', nullable: true })
  puc_tran: number;
}
