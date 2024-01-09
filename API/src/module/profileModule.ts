import { Module } from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Commentaire, Like, Profil, Publication} from "./model/entity";
import {ProfilController} from "./controller/profil.controller";
import {PublicationController} from "./controller/publication.controller";
import {CommentaireController} from "./controller/commentaire.controller";
import {LikeController} from "./controller/Like.controller";
import {ProfilService} from "./service/profil.service";
import {PublicationService} from "./service/publication.service";
import {CommentaireService} from "./service/commentaire.service";
import {LikeService} from "./service/Like.service";

@Module({
    imports: [TypeOrmModule.forFeature([Profil, Publication, Commentaire, Like])],
    controllers: [ProfilController, PublicationController, CommentaireController, LikeController],
    providers: [ProfilService, PublicationService, CommentaireService, LikeService]
})
export class ProfileModule {}
