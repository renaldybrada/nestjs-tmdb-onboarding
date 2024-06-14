import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { SyncTmdbService } from "./syncTmdb.service";
import { HttpModule } from "@nestjs/axios";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";
import { Movies } from "src/database/entities/movies/movies.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieService } from "./movies.service";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies])
    ],
    controllers: [MoviesController],
    providers: [
        MovieService,
        FetchTmdbApiService,
        SyncTmdbService
    ],
})
export class MoviesModule {}