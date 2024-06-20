import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tags } from "src/database/entities/movies/tags.entity";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";
import { Repository } from "typeorm";
import { TagsService } from "./tags.service";

@Controller('api/v1/backoffice/tags')
@UseGuards(IsAdminGuard)
export class BackOfficeTagsController {
    constructor(
        private tagsService: TagsService
    ) {}

    @Get('')
    async listTagsBackoffice() {
        const tagsList = await this.tagsService.movieTagsList();

        return {
            'code': 200,
            'msg': 'success get list tags',
            'data' : tagsList 
        }
    }
}