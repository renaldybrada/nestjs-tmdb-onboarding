import { IsEmail, IsNotEmpty, IsString, IsEmpty } from "class-validator";

export class RegisterDto {
    @IsString()
    @IsNotEmpty()
    name: string

    @IsEmail()
    @IsNotEmpty()
    email: string

    @IsString()
    @IsNotEmpty()
    password: string
}