import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {ulid} from "ulid";
import {Address} from "@common/model";
import {isNil} from "lodash";
import { Credential } from "../../../security";


@Entity()
export class Profil extends BaseEntity {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idProfil: string;

    @Column({length: 50, nullable: true})
    nom: string;

    @Column({length: 50, nullable: true})
    prenom: string;

    @Column({length: 200, nullable: true})
    description: string;

    @Column({length: 50, nullable: true})
    status: string;

    @Column({length: 100, nullable: true})
    photoProfil: string;

    @Column({length: 34, nullable: true})
    email: string;

    @OneToOne(() => Credential, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id_fk'})
    credential: Credential;

}