import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Commentaire} from "../model/entity";
import {CommentaireCreatePayload} from "../model/payload/commentaire-create.payload";
import {CommentaireService} from "../service/commentaire.service";
import { User } from "@common/config";
import {Credential} from "../../security";




@ApiBearerAuth('access-token')
@ApiTags('Commentaire')
@Controller('commentaire')
export class CommentaireController {
    constructor(private readonly service: CommentaireService) {
    }
    @Post('create')
    create(@User() user: Credential, @Body() payload: CommentaireCreatePayload): Promise<Commentaire> {
        return this.service.create(user, payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Commentaire> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Commentaire[]> {
        return this.service.getAll();
    }
    @Get('list/:idPublication')
    getAllById(@Param('idPublication') idPublication: string): Promise<Commentaire[]> {
        return this.service.getAllById(idPublication);
    }
    @Delete('delete/:id')
    delete(@Param('id') id: string): Promise<void> {
        return this.service.delete(id);
    }
    @Get('count-c')
    getCount(@User() user: Credential): Promise<number> {
        return this.service.getCount(user.credential_id);
    }
    @Get('last-comment-date')
    getLastCommentDate(@User() user: Credential): Promise<Date> {
        return this.service.getLastCommentDate(user.credential_id);
    }
}