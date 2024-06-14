import { IsOptional } from "class-validator";

export class MovieListDto {
    @IsOptional()
    keyword?: string
}