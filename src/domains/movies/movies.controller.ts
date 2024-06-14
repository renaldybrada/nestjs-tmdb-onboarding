import { Controller, Get, Query } from "@nestjs/common";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";
import { MovieService } from "./movies.service";
import { MovieListDto } from "./dto/movieList.dto";

@Controller('api/v1/movies')
export class MoviesController {
    constructor (
        private readonly fetchTmdbApi: FetchTmdbApiService, 
        private movieService: MovieService
    ) {}

    @Get('')
    movieList(@Query() movieListDto: MovieListDto) {
        return this.movieService.movieList(movieListDto);
    }

    @Get('tmdb')
    movieListTmdb() {
        return this.fetchTmdbApi.nowPlayingList();
    }
}