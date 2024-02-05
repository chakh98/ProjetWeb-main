import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {ulid} from "ulid";
import {Address} from "@common/model";
import {isNil} from "lodash";
import { Credential } from "../../../security";
import {
    PrimaryGeneratedColumn
} from "typeorm";



@Entity()
export class Profil extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
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

    @OneToOne(() => Credential, {eager: true})
    @JoinColumn({referencedColumnName: 'credential_id', name: 'credential_id'})
    credential_id: string;


}