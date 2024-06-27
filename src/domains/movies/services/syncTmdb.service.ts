import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { FetchTmdbApiService } from "./fetchTmdbApi.service";
import { InjectRepository } from '@nestjs/typeorm';
import { Movies } from 'src/database/entities/movies/movies.entity';
import { Repository } from 'typeorm';
import { map } from 'rxjs';

@Injectable()
export class SyncTmdbService {
  private readonly logger = new Logger(SyncTmdbService.name);
  
  constructor(
    @InjectRepository(Movies)
    private movieRepository: Repository<Movies>,
    private readonly fetchTmdbApi: FetchTmdbApiService  
  ) {}

  @Cron(CronExpression.EVERY_5_HOURS)
  async handleCron() {
    (await this.fetchTmdbApi.nowPlayingList()).pipe(
      map(res => res.results)
    ).subscribe(async (movies) => {
      // seeding movies from tmdb
      for (const movie of movies) {
        const newMovie = this.movieRepository.create({
          title: movie.original_title,
          overview: movie.overview,
          poster: movie.poster_path,
          tmdbId: movie.id
        });
        await this.movieRepository.save(newMovie);
      }
    })

  }
}