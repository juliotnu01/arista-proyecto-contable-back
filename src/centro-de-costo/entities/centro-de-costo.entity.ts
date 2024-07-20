import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('centro_costo')
export class CentroCosto {
  @PrimaryGeneratedColumn()
  ceco_id: number;

  @Column({ type: 'varchar', length: 4, nullable: true })
  ceco_codi: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  ceco_nomb: string;

  @Column({ type: 'int', nullable: true })
  ceco_nive: number;

  @Column({ type: 'varchar', length: 20, nullable: true })
  ceco_nivel: string;

  @Column({ type: 'varchar', length: 2, nullable: true })
  ceco_nivet: string;

  @Column({ type: 'int', nullable: true })
  ceco_status: number;
}
