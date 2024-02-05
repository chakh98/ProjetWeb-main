import {IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Profil} from '../entity/profil.entity';
import {Publication} from '../entity/publication.entity';
import {Credential} from "../../../security";



export class CommentaireCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 500)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;


}