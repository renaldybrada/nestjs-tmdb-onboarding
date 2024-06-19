import { IsEmail, IsNotEmpty, IsString, IsEmpty, IsDateString, IsArray } from "class-validator";

export class UpdateMovieDto {
    @IsString()
    @IsNotEmpty()
    title: string

    @IsString()
    @IsNotEmpty()
    overview: string

    @IsDateString()
    @IsNotEmpty()
    play_until: string

    @IsArray()
    tags: Array<string>
}