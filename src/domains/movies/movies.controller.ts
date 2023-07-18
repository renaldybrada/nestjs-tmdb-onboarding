import { Controller, Get } from "@nestjs/common";

@Controller('movies')
export class MoviesController {
    @Get('')
    movieList() {
        return 'this movie list'
    }
}