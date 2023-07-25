import { HttpException, Injectable } from "@nestjs/common";
import { LoginDto } from "./dto/login.dto";
import { RegisterDto } from "./dto/register.dto";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "src/database/entities/users/users.entity";
import { Repository } from "typeorm";
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(Users)
        private userRepository: Repository<Users>,
        private jwtService: JwtService
    ){}
    
    async login(loginDto: LoginDto) {
        const user = await this.userRepository.findOneBy({'email' : loginDto.email})
        let response = {
            'code': 401,
            'msg': 'error credentials',
            'access_token': null
        }

        if (user != null) {
            const passwordIsMatch = await bcrypt.compare(loginDto.password, user.password)
            if (passwordIsMatch) {
                const payload = {email: user.email, name: user.name, is_admin: user.isAdmin}
                const token = await this.jwtService.signAsync(payload)
                response = {
                    'code': 200,
                    'msg': 'success login',
                    'access_token': token
                }
            }
        }

        return response
    }

    async register(registerDto: RegisterDto) {
        const saltOrRounds = 10;
        const hashedPassword = await bcrypt.hash(registerDto.password, saltOrRounds)

        const registerUser = {
            email: registerDto.email,
            password: hashedPassword
        }
        
        await this.userRepository.save(registerUser)

        return registerUser
    }
}