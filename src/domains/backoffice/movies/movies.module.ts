import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BackofficeMoviesController } from "./movies.controller";
import { Movies } from "src/database/entities/movies/movies.entity";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies])
    ],
    controllers: [BackofficeMoviesController],
    providers: [
    ],
})
export class BackofficeMovieModule {}