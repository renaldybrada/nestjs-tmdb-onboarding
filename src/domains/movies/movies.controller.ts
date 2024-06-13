import { Controller, Get } from "@nestjs/common";
import { FetchTmdbApiService } from "./fetchTmdbApi.service";

@Controller('movies')
export class MoviesController {
    constructor (private readonly fetchTmdbApi: FetchTmdbApiService) {}

    @Get('')
    movieList() {
        return 'this movie list'
    }

    @Get('tmdb')
    movieListTmdb() {
        return this.fetchTmdbApi.nowPlayingList();
    }
}