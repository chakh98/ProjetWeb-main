import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Commentaire} from "../model/entity/commentaire.entity";
import {Profil} from "../model/entity/profil.entity";
import {Repository} from "typeorm";
import {ProfilCreatePayload} from "../model/payload/profil-create.payload";
import {Builder} from "builder-pattern";
import {
    CommentaireCreateException, CommentaireListException, CommentaireNotFoundException, CommentaireDeleteException,
} from "../profil.exception";
import {isNil} from "lodash";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";
import {Credential} from "../../security";

@Injectable()
export class CommentaireService {
    constructor(@InjectRepository(Commentaire) private readonly repository: Repository<Commentaire>) {}
    async create(user: Credential, payload: CommentaireCreatePayload): Promise<Commentaire> {
        try {
            return await this.repository.save(Builder<Commentaire>()
                .contenu(payload.contenu)
                .credential_id(user.credential_id)
                .idPublication(payload.idPublication)
                .build());
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
    }
    async getAllById(idPublication: string): Promise<Commentaire[]> {
        try {
            return await this.repository.find({ where: { idPublication } });
        } catch (e) {
            throw new CommentaireListException();
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new CommentaireDeleteException();
        }
    }
    async getCount(userId: string): Promise<number> {
        return this.repository.count({ where: { credential_id: userId } });
    }
    async getLastCommentDate(userId: string): Promise<Date> {
        const lastComment = await this.repository.findOne({
            where: { credential_id: userId },
            order: { created: 'DESC' }
        });

        if (!lastComment) {
            throw new CommentaireNotFoundException();
        }

        return lastComment.created;
    }
}
