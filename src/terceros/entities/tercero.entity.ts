import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
// import { TipoIdentificacion } from './tipo-identificacion.entity';
// import { Ciudad } from './ciudad.entity';
// import { Banco } from './banco.entity';
// import { ActividadEconomica } from './actividad-economica.entity';
// import { Zona } from './zona.entity';
// import { Vendedor } from './vendedor.entity';
// import { TipoRegimen } from './tipo-regimen.entity';

@Entity('tercero')
export class Tercero {
  @PrimaryGeneratedColumn()
  terc_id: number;

//   @ManyToOne(() => TipoIdentificacion)
//   tiid_id: TipoIdentificacion;

//   @ManyToOne(() => Ciudad)
//   ciud_id: Ciudad;

//   @ManyToOne(() => Banco)
//   banc_id: Banco;

//   @ManyToOne(() => ActividadEconomica)
//   acec_id: ActividadEconomica;

//   @ManyToOne(() => Zona)
//   zona_id: Zona;

//   @ManyToOne(() => Vendedor)
//   vend_id: Vendedor;

//   @ManyToOne(() => TipoRegimen)
//   tire_id: TipoRegimen;

  @Column({ type: 'int', nullable: true })
  lipr_id: number;

  @Column({ type: 'varchar', length: 45, nullable: true })
  terc_iden: string;

  @Column({ type: 'tinyint', nullable: false })
  terc_dv: number;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_nomb1: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_nomb2: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_apel: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_apel2: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_razo: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  terc_dire: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_barr: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  terc_tele: string;

  @Column({ type: 'varchar', length: 45, nullable: true })
  terc_celu: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  terc_cont: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  terc_email: string;

  @Column({ type: 'varchar', length: 200, nullable: true })
  terc_cuenb: string;

  @Column({ type: 'datetime', nullable: true })
  terc_fechi: Date;

  @Column({ type: 'datetime', nullable: true })
  terc_fechr: Date;

  @Column({ type: 'varchar', length: 45, nullable: true })
  terc_alte: string;

  @Column({ type: 'text', nullable: true })
  terc_obse: string;

  @Column({ type: 'decimal', precision: 10, scale: 3, nullable: false })
  terc_retei: number;

  @Column({ type: 'decimal', precision: 10, scale: 3, nullable: false })
  terc_retef: number;

  @Column({ type: 'int', nullable: false })
  terc_plaz: number;

  @Column({ type: 'decimal', precision: 18, scale: 5, nullable: false })
  terc_cupo: number;

  @Column({ type: 'decimal', precision: 18, scale: 5, nullable: false })
  terc_sald: number;

  @Column({ type: 'date', nullable: false })
  terc_fechn: Date;

  @Column({ type: 'tinyint', width: 1, nullable: false })
  terc_iva: number;

  @Column({ type: 'tinyint', width: 1, nullable: false, default: 0 })
  terc_stat: number;
}
