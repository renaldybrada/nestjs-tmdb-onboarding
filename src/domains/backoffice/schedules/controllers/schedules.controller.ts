import { Body, Controller, Get, Post, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/guards/isAdmin.guard";
import { AddMovieScheduleDto } from "../dto/addMovieSchedule.dto";
import { ScheduleMovieService } from "../services/schedules.service";

@Controller('api/v1/backoffice/movies/schedule')
@UseGuards(IsAdminGuard)
export class BackOfficeScheduleController {
    constructor(
        private scheduleMovieService: ScheduleMovieService
    ) {}

    @Get('')
    async listMovieSchedules() {
        const scheduleList = await this.scheduleMovieService.listSchedule();

        return {
            'code': 200,
            'msg': 'success get list schedule',
            'data' : scheduleList 
        }
    }

    @Post('')
    async addMovieSchedule(@Body() addScheduleDto: AddMovieScheduleDto) {
        await this.scheduleMovieService.handleAddSchedule(addScheduleDto);

        return {
            'code': 200,
            'msg': 'success add schedule' 
        }
    }
}