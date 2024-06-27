import { Body, Controller, HttpException, HttpStatus, ParseFilePipe, Post, UploadedFile, UseInterceptors } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { LoginDto } from "../dto/login.dto";
import { RegisterDto } from "../dto/register.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { Public } from "../decorators/public.decorators";
import { diskStorage } from "multer";
import { extname } from "path";

@Controller('api/v1/auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Public()
    @Post('login')
    login(@Body() loginDto: LoginDto) {
        const login = this.authService.login(loginDto)
        
        return login
    }

    @Public()
    @Post('register')
    @UseInterceptors(FileInterceptor('avatar', {
        storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
                const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                cb(null, `${randomName}${extname(file.originalname)}`)
            }
        })
    }))
    async register(
        @UploadedFile() avatar: Express.Multer.File,
        @Body() registerDto: RegisterDto,
    ) {
        try {
            const register = await this.authService.register(avatar, registerDto)
            
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