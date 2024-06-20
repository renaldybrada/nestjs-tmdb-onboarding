import { Module } from "@nestjs/common";
import { MoviesController } from "./movies.controller";
import { SyncTmdbService } from "./syncTmdb.service";
import { HttpModule } from "@nestjs/axios";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";
import { Movies } from "src/database/entities/movies/movies.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { MovieService } from "./movies.service";
import { BullModule } from "@nestjs/bull";
import { QueueService } from "./queue/queue.service";
import { QueueProcessor } from "./queue/queue.processor";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies]),
        BullModule.forRoot({
            redis: {
              host: 'localhost',
              port: 6379,
            },
        }),
        BullModule.registerQueue({
            name: 'my-queue',
        }),
    ],
    controllers: [MoviesController],
    providers: [
        MovieService,
        FetchTmdbApiService,
        SyncTmdbService,
        QueueService,
        QueueProcessor
    ],
})
export class MoviesModule {}