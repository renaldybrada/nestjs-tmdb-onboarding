import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Studios } from "src/database/entities/studios/studios.entity";
import { BackOfficeStudioController } from "./studios.controller";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Studios])
    ],
    controllers: [
        BackOfficeStudioController
    ]
})
export class BackOfficeStudiosModule {}