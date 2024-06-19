import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";

@Controller('api/v1/backoffice/studios')
@UseGuards(IsAdminGuard)
export class BackOfficeStudioController {
    constructor() {}

    @Get('')
    listStudiosBackoffice() {
        return 'list studios backoffice'
    }
}