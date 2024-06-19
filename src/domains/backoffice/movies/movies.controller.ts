import { Controller, Get, Put, Query, UseGuards } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";
import { MovieListDto } from "src/domains/movies/dto/movieList.dto";

@Controller('api/v1/backoffice/movies')
@UseGuards(IsAdminGuard)
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