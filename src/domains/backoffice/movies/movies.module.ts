import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BackofficeMoviesController } from "./controllers/movies.controller";
import { Movies } from "src/database/entities/movies/movies.entity";
import { UpdateMovieService } from "./services/updateMovie.service";
import { MovieService } from "src/domains/movies/services/movies.service";
import { Tags } from "src/database/entities/movies/tags.entity";
import { MovieTags } from "src/database/entities/movies/movieTags.entity";

@Module({
    imports: [
        HttpModule, 
        TypeOrmModule.forFeature([Movies,Tags, MovieTags])
    ],
    controllers: [BackofficeMoviesController],
    providers: [
        UpdateMovieService,
        MovieService
    ],
})
export class BackofficeMovieModule {}