import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Posts} from "./posts.model";
import {CreatePostDto} from "./dto/create-post.dto";
import {FilesService} from "../files/files.service";

@Injectable()
export class PostsService {

    constructor(@InjectModel(Posts) private postRepository: typeof Posts, private fileService: FilesService) {
    }

    async create(dto: CreatePostDto, image: any) {
        const fileName = await this.fileService.createFile(image)

        return await this.postRepository.create({...dto, image: fileName})
    }
}
