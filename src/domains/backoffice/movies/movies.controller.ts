import { Body, Controller, Get, Param, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { IsAdminGuard } from "src/domains/auth/isAdmin.guard";
import { MovieListDto } from "src/domains/movies/dto/movieList.dto";
import { MovieService } from "src/domains/movies/movies.service";
import { UpdateMovieDto } from "./dto/updateMovie.dto";
import { UpdateMovieService } from "./updateMovie.service";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('api/v1/backoffice/movies')
@UseGuards(IsAdminGuard)
export class BackofficeMoviesController {
    constructor (
        private movieService: MovieService,
        private updateMovieService: UpdateMovieService
    ) {}
    
    @Get('')
    listMovieBackoffice(@Query() movieListDto: MovieListDto) {
        return this.movieService.movieList(movieListDto);
    }

    @Put(':id')
    @UseInterceptors(FileInterceptor('poster'))
    async updateMovieBackoffice(@Param('id') id: number, @Body() updateMovieDto: UpdateMovieDto) {
        console.log(id)
        console.log(updateMovieDto)        
        
        await this.updateMovieService.handleUpdateMovie(id, updateMovieDto);

        return {
            'code': 200,
            'msg': 'success update movie' 
        }
    }
}