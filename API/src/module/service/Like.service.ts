import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Like} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    LikeCreateException, LikeListException, LikeNotFoundException, LikeDeleteException
} from "../profil.exception";
import {isNil} from "lodash";
import {LikeCreatePayload} from "../model/payload/Like-create.payload";
import {Credential} from "../../security";

@Injectable()
export class LikeService {
    constructor(@InjectRepository(Like) private readonly repository: Repository<Like>) {}
    async like(utilisateur: Credential, payload:  LikeCreatePayload): Promise<Like> {
        const result = await this.repository.findOneBy({idPublication:payload.idPublication , credential_id:utilisateur.credential_id});
        if(result != undefined){
            await this.repository.remove(result);
            return result;
        }
        try {
            const newLike = Object.assign(new Like(), Builder<Like>()
                .credential_id(utilisateur.credential_id)
                .idPublication(payload.idPublication)
                .build());
            return await this.repository.save(newLike);
        } catch (e) {
            throw new LikeCreateException();
        }
    }
    async detail(id: string): Promise<Like> {
        const result = await this.repository.findOneBy({idLike: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new LikeNotFoundException();
    }

    async check(utilisateur: Credential,idPublication: string,): Promise<Like> {
        return await this.repository.findOneBy({idPublication: idPublication,credential_id:utilisateur.credential_id});
    }

    async getAll(): Promise<Like[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new LikeListException();
        }
    }

    async delete(id: string): Promise<void> {
        try {
            const detail = await this.detail(id);
            await this.repository.remove(detail);
        } catch (e) {
            throw new LikeDeleteException();
        }
    }
    async getAllByIdPublication(idPublication: string): Promise<Like[]> {
        try {
            return await this.repository.find({ where: { idPublication : idPublication } });
        } catch (e) {
            throw new LikeListException();
        }
    }

}
