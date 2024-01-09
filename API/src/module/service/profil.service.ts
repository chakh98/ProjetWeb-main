import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {Builder} from "builder-pattern";
import {isNil} from "lodash";
import {Profil} from "../model/entity";
import {ProfilCreatePayload} from "../model/payload/profil-create.payload";
import {ProfilCreateException, ProfilListException, ProfilNotFoundException} from "../profil.exception";

@Injectable()
export class ProfilService {
    constructor(@InjectRepository(Profil) private readonly repository: Repository<Profil>) {}
    async create(payload: ProfilCreatePayload): Promise<Profil> {
        try {
            const newProfil = Object.assign(new Profil(), Builder<Profil>()
                .nom(payload.nom)
                .prenom(payload.prenom)
                .description(payload.description)
                .status(payload.status)
                .photoProfil(payload.photoProfil)
                .email(payload.email)
                .credential(payload.credential)
                .build());
            return await this.repository.save(newProfil);
        } catch (e) {
            throw new ProfilCreateException();
        }
    }
    async detail(id: string): Promise<Profil> {
        const result = await this.repository.findOneBy({idProfil: id});
        if (!(isNil(result))) {
            return result;
        }
        throw new ProfilNotFoundException();
    }

    async getAll(): Promise<Profil[]> {
        try {
            return await this.repository.find();
        } catch (e) {
            throw new ProfilListException();
        }
    }

}

