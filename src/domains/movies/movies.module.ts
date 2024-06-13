import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { SyncTmdbService } from "./syncTmdb.service";
import { HttpModule } from "@nestjs/axios";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";
import { Movies } from "src/database/entities/movies/movies.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies])
    ],
    controllers: [MoviesController],
    providers: [
        FetchTmdbApiService,
        SyncTmdbService
    ],
})
export class MoviesModule {}