import { HttpException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Movies } from "src/database/entities/movies/movies.entity";
import { In, Repository } from "typeorm";
import { ExceptionsHandler } from "@nestjs/core/exceptions/exceptions-handler";
import { Tags } from "src/database/entities/movies/tags.entity";
import { MovieTags } from "src/database/entities/movies/movieTags.entity";
import { MovieSchedules } from "src/database/entities/movies/movieSchedules.entity";
import { AddMovieScheduleDto } from "./dto/addMovieSchedule.dto";
import { Studios } from "src/database/entities/studios/studios.entity";

@Injectable() 
export class ScheduleMovieService{
    constructor(
        @InjectRepository(Movies)
        private movieRepository: Repository<Movies>,
        @InjectRepository(Studios)
        private studioRepository: Repository<Studios>,
        @InjectRepository(MovieSchedules)
        private movieScheduleRepository: Repository<MovieSchedules>
    ){}

    async listSchedule() {
        return await this.movieScheduleRepository.find();
    }

    async handleAddSchedule(scheduleDto: AddMovieScheduleDto) {
        const selectedMovie = await this.movieRepository.findOneBy({'id': scheduleDto.movie_id});
        if (selectedMovie == undefined) throw new HttpException('movie not found', 400);

        const selectedStudio = await this.studioRepository.findOneBy({'id': scheduleDto.studio_id});
        if (selectedMovie == undefined) throw new HttpException('studio not found', 400);
        
        try {
            let newSchedule = new MovieSchedules();
            newSchedule.movie = selectedMovie;
            newSchedule.studio = selectedStudio;
            newSchedule.date = scheduleDto.date;
            newSchedule.startTime = scheduleDto.start_time;
            newSchedule.endTime = scheduleDto.end_time;
            newSchedule.price = scheduleDto.price;

            this.movieScheduleRepository.save(newSchedule);

        } catch {
            throw new HttpException('something went wrong', 500)
        }    
    }
}