import { Body, Controller, HttpException, HttpStatus, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller('api/v1/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        const login = this.authService.login(loginDto)
        
        return login
    }

    @Post('register')
    @UseInterceptors(FileInterceptor('file'))
    async register(
        @UploadedFile() file: Express.Multer.File,
        @Body() registerDto: RegisterDto,
    ) {
        try {
            console.log('inside controller ', file.path)
            const register = await this.authService.register(file, registerDto)
            
            return {
                msg: 'success create user',
                data: register
            }
        } catch (error) {
            throw new HttpException({
                code: 500,
                status: 'error',
                message: error.code
            }, HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }

    @Post('upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file)
    }
}