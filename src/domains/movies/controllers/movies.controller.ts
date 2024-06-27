import { Controller, Get, Query } from "@nestjs/common";
import { FetchTmdbApiService } from "../services/fetchTmdbApi.service";
import { MovieService } from "../services/movies.service";
import { MovieListDto } from "../dto/movieList.dto";
import { QueueService } from "../queue/queue.service";
import { Public } from "../../auth/decorators/public.decorators";
import { map } from 'rxjs';

@Controller('api/v1/movies')
export class MoviesController {
    constructor (
        private readonly fetchTmdbApi: FetchTmdbApiService, 
        private movieService: MovieService,
        private readonly queueService: QueueService
    ) {}

    @Get('')
    movieList(@Query() movieListDto: MovieListDto) {
        return this.movieService.movieList(movieListDto);
    }

    @Get('tmdb')
    @Public()
    async movieListTmdb() {
        var tmdbMovies = await this.fetchTmdbApi.nowPlayingList();
        
        tmdbMovies.pipe(
            map(res => res.results)
          ).subscribe(async (movies) => {
            for (const movie of movies) {
                await this.queueService.addJob(movie.original_title);
            }
        })

        return {
            msg: 'job queued'
        }
    }
}