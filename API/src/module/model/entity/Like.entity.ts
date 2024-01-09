import {BeforeInsert, Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn} from "typeorm";
import {BaseEntity} from "@common/model/entity/base.entity";
import {ulid} from "ulid";
import {Address} from "@common/model";
import {isNil} from "lodash";
import { Credential } from "../../../security";
import {Profil} from "./profil.entity";
import {Publication} from "./publication.entity";
import {Commentaire} from "./commentaire.entity";


@Entity()
export class Like extends BaseEntity {
    @PrimaryColumn('varchar', {length: 26, default: () => `'${ulid()}'`})
    idLike: string;

    @OneToOne(() => Profil, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idProfil', name: 'idProfil_fk'})
    profil: Profil;

    @OneToOne(() => Publication, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idPublication', name: 'idPublication_fk'})
    publication: Publication;

    @OneToOne(() => Commentaire, {cascade: true, eager: true})
    @JoinColumn({referencedColumnName: 'idCommentaire', name: 'idCommentaire_fk'})
    commentaire: Commentaire;

}