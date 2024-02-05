import {
    BeforeInsert,
    Column,
    Entity,
    JoinColumn, ManyToOne,
    OneToMany,
    OneToOne,
    PrimaryColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import { Credential } from "../../../security";
import {Publication} from "./publication.entity";
import {Commentaire} from "./commentaire.entity";


@Entity()
export class Like extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idLike: string;

    @ManyToOne(() => Credential, {eager:false})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @ManyToOne(() => Publication, {cascade: true, eager: false})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication'})
    idPublication: string;

}