import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Like} from "../model/entity";
import {LikeCreatePayload} from "../model/payload/Like-create.payload";
import {LikeService} from "../service/Like.service";
import {Credential} from "../../security";
import { User } from "@common/config";

@ApiBearerAuth('access-token')
@ApiTags('Like')
@Controller('Like')
export class LikeController {
    constructor(private readonly service: LikeService) {
    }
    @Post('/')
    create(@User() utilisateur: Credential,@Body() payload: LikeCreatePayload): Promise<Like> {
        return this.service.like(utilisateur, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Like> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Like[]> {
        return this.service.getAll();
    }
    @Get('list/:idPublication')
    getAllByIdPublication(@Param('idPublication') idPublication: string): Promise<Like[]> {
        return this.service.getAllByIdPublication(idPublication);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('last-like-date')
    getLastPublicationDate(@User() user: Credential): Promise<Date> {
        return this.service.getLastLikeDate(user.credential_id);
    }
}