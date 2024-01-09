import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Profil} from '../entity/profil.entity';
import {Publication} from '../entity/publication.entity';


export class CommentaireCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 50)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    profil: Profil;

    @ApiProperty()
    @IsOptional()
    publication: Publication;
}