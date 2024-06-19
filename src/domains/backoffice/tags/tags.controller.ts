import { Controller, Get, Post } from "@nestjs/common";

@Controller('api/v1/backoffice/tags')
export class BackOfficeTagsController {
    constructor() {}

    @Get('')
    listTagsBackoffice() {
        return 'list tags backoffice'
    }
}