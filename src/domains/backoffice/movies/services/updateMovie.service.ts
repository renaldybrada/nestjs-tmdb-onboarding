import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movies } from "src/database/entities/movies/movies.entity";
import { In, Repository } from "typeorm";
import { UpdateMovieDto } from "../dto/updateMovie.dto";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { Tags } from "src/database/entities/movies/tags.entity";
import { MovieTags } from "src/database/entities/movies/movieTags.entity";

@Injectable() 
export class UpdateMovieService{
    constructor(
        @InjectRepository(Movies)
        private movieRepository: Repository<Movies>,
        @InjectRepository(Tags)
        private tagRepository: Repository<Tags>,
        @InjectRepository(MovieTags)
        private movieTagRepository: Repository<MovieTags>
    ){}

    async handleUpdateMovie(id: number, updateMovieDto: UpdateMovieDto) {
        let selectedMovie = await this.movieRepository.findOneBy({'id': id});
        if (selectedMovie == undefined) throw new HttpException('movie not found', 400);
        
        try {
            console.log(selectedMovie)

            selectedMovie.title = updateMovieDto.title;
            selectedMovie.overview = updateMovieDto.overview;
            selectedMovie.playUntil = updateMovieDto.play_until;
            this.movieRepository.save(selectedMovie)

            if (updateMovieDto.tags.length > 0) {
                const selectedTags = await this.tagRepository.find({where: {id: In(updateMovieDto.tags)}});
                
                selectedTags.forEach(tag => {
                    var newMovieTags = new MovieTags();
                    newMovieTags.movies = selectedMovie;
                    newMovieTags.tags = tag;
                    this.movieTagRepository.save(newMovieTags);
                });
            }
        } catch {
            throw new HttpException('something went wrong', 500)
        }    
    }
}