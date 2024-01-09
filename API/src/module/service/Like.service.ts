import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Like} from "../model/entity";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {
    LikeCreateException, LikeListException, LikeNotFoundException,
} from "../profil.exception";
import {isNil} from "lodash";
import {LikeCreatePayload} from "../model/payload/Like-create.payload";

@Injectable()
export class LikeService {
    constructor(@InjectRepository(Like) private readonly repository: Repository<Like>) {}
    async create(payload: LikeCreatePayload): Promise<Like> {
        try {
            const newLike = Object.assign(new Like(), Builder<Like>()
                .profil(payload.profil)
                .publication(payload.publication)
                .commentaire(payload.commentaire)
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

    async getAll(): Promise<Like[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new LikeListException();
        }
    }}
