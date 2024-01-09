import {Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {ulid} from "ulid";
import { Credential } from "../../../security";
import {Profil} from "./profil.entity";


@Entity()
export class Publication extends BaseEntity {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idPublication: string;

    @Column({length: 200, nullable: true})
    contenu: string;

    @Column({length: 50, nullable: true})
    typePublication: string;

    @OneToOne(() => Profil, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idProfil', name: 'idProfil_fk'})
    profile: Profil;

}