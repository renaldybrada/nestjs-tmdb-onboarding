import { Module } from "@nestjs/common";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./services/auth.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Users } from "src/database/entities/users/users.entity";
import { JwtModule } from "@nestjs/jwt/dist";
import { jwtConstants } from "./consts/auth.const";

@Module({
    imports: [
        TypeOrmModule.forFeature([Users]),
        JwtModule.register({
            global: true,
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [AuthController],
    providers: [AuthService]
})
export class AuthModule {

}