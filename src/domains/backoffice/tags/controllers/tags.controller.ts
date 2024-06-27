import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/guards/isAdmin.guard";
import { TagsService } from "../services/tags.service";

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