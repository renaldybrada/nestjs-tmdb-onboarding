import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieSchedules } from "src/database/entities/movies/movieSchedules.entity";
import { BackOfficeScheduleController } from "./schedules.controller";
import { ScheduleMovieService } from "./schedules.service";
import { Studios } from "src/database/entities/studios/studios.entity";
import { Movies } from "src/database/entities/movies/movies.entity";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([MovieSchedules,Studios, Movies])
    ],
    controllers: [
        BackOfficeScheduleController
    ],
    providers: [
        ScheduleMovieService
    ]
})
export class BackOfficeScheduleModule {}