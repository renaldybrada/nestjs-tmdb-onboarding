import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tags } from "src/database/entities/movies/tags.entity";
import { BackOfficeTagsController } from "./tags.controller";
import { TagsService } from "./tags.service";

@Module({
    imports: [
        HttpModule,
        TypeOrmModule.forFeature([Tags])
    ],
    controllers: [
        BackOfficeTagsController
    ],
    providers: [
        TagsService
    ]
})
export class BackOfficeTagsModule {}