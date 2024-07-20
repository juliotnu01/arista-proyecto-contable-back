import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('periodo')
export class Periodo {
  @PrimaryGeneratedColumn()
  peri_id: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  peri_desc: string;

  @Column({ type: 'int', nullable: true })
  peri_ano: number;

  @Column({ type: 'int', nullable: true })
  peri_mes: number;

  @Column({ type: 'tinyint', width: 1, nullable: true })
  peri_status: number;
}
