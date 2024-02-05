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
import { SecurityController, Token, TokenService } from "../security";
import { SecurityService } from "../security/service/security.service";
import {Credential} from "../security";

@Module({
    controllers: [CommentaireController, LikeController, ProfilController, PublicationController, SecurityController],
    imports: [TypeOrmModule.forFeature([Commentaire, Credential, Like, Profil, Publication, Token])],
    providers: [CommentaireService, LikeService, ProfilService, PublicationService, SecurityService, TokenService],
})
export class ProfileModule {}