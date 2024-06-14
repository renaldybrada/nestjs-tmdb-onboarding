import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movies } from "src/database/entities/movies/movies.entity";
import { Repository } from "typeorm";
import { MovieListDto } from "./dto/movieList.dto";

@Injectable()
export class MovieService {
    constructor(
        @InjectRepository(Movies)
        private movieRepository: Repository<Movies>
    ) {}

    movieList(movieListDto: MovieListDto) {
        const { keyword } = movieListDto
        const queryBuilder = this.movieRepository.createQueryBuilder('movies')

        if (keyword) {
            queryBuilder.andWhere('movies.title LIKE :keyword', { keyword: `%${movieListDto.keyword}%` })
        }
        
        // console.log(queryBuilder.getQueryAndParameters())
        return queryBuilder.getMany();
    }
}