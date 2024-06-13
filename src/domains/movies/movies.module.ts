import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { SyncTmdbService } from "./syncTmdb.service";

@Module({
    controllers: [MoviesController],
    providers: [
        SyncTmdbService
    ],
})
export class MoviesModule {}