import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";

@Controller('api/v1/backoffice/tags')
@UseGuards(IsAdminGuard)
export class BackOfficeTagsController {
    constructor() {}

    @Get('')
    listTagsBackoffice() {
        return 'list tags backoffice'
    }
}