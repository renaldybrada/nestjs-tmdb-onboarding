import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { Movies } from "src/database/entities/movies/movies.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BackofficeMovieModule } from "./movies/movies.module";
import { BackOfficeScheduleModule } from "./schedules/schedules.module";
import { BackOfficeStudiosModule } from "./studios/studios.module";
import { BackOfficeTagsModule } from "./tags/tags.module";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies]),
        BackofficeMovieModule,
        BackOfficeScheduleModule,
        BackOfficeStudiosModule,
        BackOfficeTagsModule
    ],
    controllers: [],
    providers: [
    ],
})
export class BackofficeModule {}