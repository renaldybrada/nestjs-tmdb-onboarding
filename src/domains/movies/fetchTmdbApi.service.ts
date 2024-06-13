import { HttpService } from '@nestjs/axios';
import { ForbiddenException, Injectable, Logger } from '@nestjs/common';
import { AxiosError } from 'axios';
import { map, catchError } from 'rxjs';

@Injectable()
export class FetchTmdbApiService {
    private readonly logger = new Logger(FetchTmdbApiService.name);
    private tmdbToken:string = process.env.TMDB_TOKEN;
    private tmdbBaseUrl:string = 'https://api.themoviedb.org/3/';      

    constructor(private readonly httpService: HttpService) {}

    async nowPlayingList() {
        const endpoint:string = this.tmdbBaseUrl + 'movie/now_playing';

        return this.httpService
                .get(endpoint, {
                    headers: {
                        Authorization: 'Bearer ' + this.tmdbToken
                    }
                })
                .pipe(map((res) => {
                    return res.data
                }))
                .pipe(
                    catchError((error: AxiosError) => {
                      this.logger.error(error.response.data);
                      throw 'An error happened!';
                    })
                )
    }
}