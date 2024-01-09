import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";
import {Address} from "@common/model";
import {Profil} from "../entity/profil.entity";

export class PublicationCreatePayload {
    @ApiProperty()
    @IsString()
    @IsOptional()
    @Length(1, 300)
    contenu: string;

    @ApiProperty()
    @IsOptional()
    @Length(1, 50)
    typePublication: string;

    @ApiProperty()
    @IsOptional()
    profile: Profil;

}