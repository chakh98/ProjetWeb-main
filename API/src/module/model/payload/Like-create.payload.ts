import {IsArray, IsBoolean, IsDate, IsEmail, IsOptional, IsString, Length} from "class-validator";
import {ApiProperty} from "@nestjs/swagger";

export class LikeCreatePayload {
    @ApiProperty()
    @IsOptional()
    credential_id: string;

    @ApiProperty()
    @IsOptional()
    idPublication: string;

    @ApiProperty()
    @IsOptional()
    idCommentaire: string;
}