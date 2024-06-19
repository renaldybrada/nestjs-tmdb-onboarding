import { Controller, Get, Post } from "@nestjs/common";

@Controller('api/v1/backoffice/studios')
export class BackOfficeStudioController {
    constructor() {}

    @Get('')
    listStudiosBackoffice() {
        return 'list studios backoffice'
    }
}