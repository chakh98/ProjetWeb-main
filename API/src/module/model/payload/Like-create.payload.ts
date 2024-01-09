import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Address} from "@common/model";
import {Profil} from "../entity/profil.entity";
import {Publication} from "../entity/publication.entity";
import {Commentaire} from "../entity/commentaire.entity";

export class LikeCreatePayload {
    @ApiProperty()
    @IsOptional()
    profil: Profil;

    @ApiProperty()
    @IsOptional()
    publication: Publication;

    @ApiProperty()
    @IsOptional()
    commentaire: Commentaire;
}