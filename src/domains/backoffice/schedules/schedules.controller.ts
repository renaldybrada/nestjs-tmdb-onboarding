import { Controller, Get, Post } from "@nestjs/common";

@Controller('api/v1/backoffice/movies/schedule')
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