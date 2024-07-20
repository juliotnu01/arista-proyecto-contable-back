import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToOne,
    JoinColumn,
} from 'typeorm';

@Entity('tipo_documento')
export class TipoDocumento {
    @PrimaryGeneratedColumn()
    tido_id: number;
    
    @Column({ type: 'varchar', length: 45, nullable: true })
    tido_nomb: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    tido_abre: string;

    @Column({ type: 'varchar', length: 3, nullable: true })
    tido_tipo: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    tido_pref: string;

    @Column({ type: 'int', nullable: true })
    tido_cons: number;

    @Column({ type: 'tinyint', nullable: true })
    tido_intet: number;

    @Column({ type: 'tinyint', nullable: true })
    tido_grab: number;
}
