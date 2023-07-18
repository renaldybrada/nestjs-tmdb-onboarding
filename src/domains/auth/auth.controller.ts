import { Controller, Get, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @Post('login')
    login() {
        const login = this.authService.login()
        return login
    }

    @Post('register')
    register() {
        return {
            msg: 'hello register'
        }
    }
}