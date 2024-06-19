import { IsEmail, IsNotEmpty, IsString, IsEmpty, IsDateString, IsArray, IsNumber } from "class-validator";

export class AddMovieScheduleDto {
    @IsNumber()
    @IsNotEmpty()
    movie_id: number

    @IsNumber()
    @IsNotEmpty()
    studio_id: number

    @IsDateString()
    @IsNotEmpty()
    start_time: Date

    @IsDateString()
    @IsNotEmpty()
    end_time: Date

    @IsNumber()
    @IsNotEmpty()
    price: number

    @IsDateString()
    @IsNotEmpty()
    date: Date
}