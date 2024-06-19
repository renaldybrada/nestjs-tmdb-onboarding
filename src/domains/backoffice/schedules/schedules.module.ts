import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieSchedules } from "src/database/entities/movies/movieSchedules.entity";
import { BackOfficeScheduleController } from "./schedules.controller";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([MovieSchedules])
    ],
    controllers: [
        BackOfficeScheduleController
    ]
})
export class BackOfficeScheduleModule {}