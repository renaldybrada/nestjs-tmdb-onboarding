import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login(@Body() loginDto: LoginDto) {
        const login = this.authService.login(loginDto)
        
        return login
    }

    @Post('register')
    register(@Body() registerDto: RegisterDto) {
        const register = this.authService.register(registerDto)

        return {
            msg: 'success create user',
            data: register
        }
    }
}