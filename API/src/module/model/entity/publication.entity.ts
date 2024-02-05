import {
    Column,
    Entity,
    JoinColumn,
    ManyToOne,
    OneToMany,
    PrimaryGeneratedColumn
} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {Commentaire} from "./commentaire.entity";
import { Like } from "./Like.entity";
import { Credential } from "../../../security";


@Entity()
export class Publication extends BaseEntity {
    @PrimaryGeneratedColumn("uuid")
    idPublication: string;

    @Column({length: 200, nullable: true})
    contenu: string;

    @Column({length: 50, nullable: true})
    typePublication: string;

    @ManyToOne(() => Credential, {eager:true})
    @JoinColumn({referencedColumnName:'credential_id', name:'credential_id'})
    credential_id: string

    @OneToMany(()=>Commentaire, (commentaire)=> commentaire.credential_id, {cascade:true,eager:false})
    commentaires:Commentaire[];

    @OneToMany(()=>Like, (like)=> like.credential_id, {cascade:true,eager:false})
    likes:Like[];
}