import { Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";

@Controller('api/v1/backoffice/movies/schedule')
@UseGuards(IsAdminGuard)
export class BackOfficeScheduleController {
    constructor() {}

    @Get('')
    listMovieSchedules() {
        return 'list movie schedules'
    }

    @Post('')
    addMovieSchedule() {
        return 'add movie schedules'
    }
}