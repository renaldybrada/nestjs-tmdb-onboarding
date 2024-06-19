import { Controller, Get, Put, Query } from "@nestjs/common";
import { MovieListDto } from "src/domains/movies/dto/movieList.dto";

@Controller('api/v1/backoffice/movies')
export class BackofficeMoviesController {
    constructor (
    ) {}

    @Get('')
    listMovieBackoffice() {
        return 'list movies backoffice';
    }

    @Put(':id')
    updateMovieBackoffice() {
        return 'update movies backoffice';
    }
}