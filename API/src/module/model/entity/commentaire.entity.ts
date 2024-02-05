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
import {ulid} from "ulid";
import {Address} from "@common/model";
import {isNil} from "lodash";
import { Credential } from "../../../security";
import {Publication} from "./publication.entity";
import { Like } from "./Like.entity";


@Entity()
export class Commentaire extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idCommentaire: string;

    @Column({length: 50, nullable: true})
    contenu: string;

    @ManyToOne(() => Publication, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication'})
    idPublication: string;

    @ManyToOne(() => Credential, (credential) => credential.commentaires, {eager:false})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @OneToMany(
        ()=>Like, (like)=> like.credential_id, {cascade:true,eager:false})
    likes:Like[];
}