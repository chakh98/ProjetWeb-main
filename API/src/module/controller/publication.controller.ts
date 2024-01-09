import {Body, Controller, Get, Param, Post} from '@nestjs/common';
import {ApiBearerAuth, ApiTags} from "@nestjs/swagger";
import {Publication} from "../model/entity";
import {PublicationService} from "../service/publication.service";
import {PublicationCreatePayload} from "../model/payload/publication-create.payload";

@ApiBearerAuth('access-token')
@ApiTags('Publication')
@Controller('publication')
export class PublicationController {
    constructor(private readonly service: PublicationService) {
    }
    @Post('create')
    create(@Body() payload: PublicationCreatePayload): Promise<Publication> {
        return this.service.create(payload);
    }
    @Get('detail/:id')
    detail(@Param('id') id: string): Promise<Publication> {
        return this.service.detail(id);
    }
    @Get('list')
    getAll(): Promise<Publication[]> {
        return this.service.getAll();
    }

}