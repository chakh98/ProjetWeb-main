import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Commentaire} from "../model/entity/commentaire.entity";
import {Profil} from "../model/entity/profil.entity";
import {Repository} from "typeorm";
import {ProfilCreatePayload} from "../model/payload/profil-create.payload";
import {Builder} from "builder-pattern";
import {
    CommentaireCreateException, CommentaireListException, CommentaireNotFoundException,
    ProfilCreateException,
    ProfilListException,
    ProfilNotFoundException
} from "../profil.exception";
import {isNil} from "lodash";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";

@Injectable()
export class CommentaireService {
    constructor(@InjectRepository(Commentaire) private readonly repository: Repository<Commentaire>) {}
    async create(payload: CommentaireCreatePayload): Promise<Commentaire> {
        try {
            const newCommentaire = Object.assign(new Commentaire(), Builder<Commentaire>()
                .contenu(payload.contenu)
                .profil(payload.profil)
                .publication(payload.publication)
                .build());
            return await this.repository.save(newCommentaire);
        } catch (e) {
            throw new CommentaireCreateException();
        }
    }
    async detail(id: string): Promise<Commentaire> {
        const result = await this.repository.findOneBy({idCommentaire: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new CommentaireNotFoundException();
    }

    async getAll(): Promise<Commentaire[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new CommentaireListException();
        }
    }}
