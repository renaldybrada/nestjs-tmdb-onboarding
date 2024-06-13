import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { SyncTmdbService } from "./syncTmdb.service";
import { HttpModule } from "@nestjs/axios";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";

@Module({
    imports: [HttpModule],
    controllers: [MoviesController],
    providers: [
        FetchTmdbApiService,
        SyncTmdbService
    ],
})
export class MoviesModule {}