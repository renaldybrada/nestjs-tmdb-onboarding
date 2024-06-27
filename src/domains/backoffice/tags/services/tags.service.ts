import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tags } from "src/database/entities/movies/tags.entity";
import { Repository } from "typeorm";

@Injectable()
export class TagsService {
    constructor(
        @InjectRepository(Tags)
        private movieTagsRepository: Repository<Tags>
    ){}

    async movieTagsList() {
        return await this.movieTagsRepository.find();
    }
}