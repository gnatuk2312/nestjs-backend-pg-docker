import { Injectable } from "@nestjs/common";

import { CreatePostDto } from "./dto/create-post.dto";
import { FilesService } from "src/files/files.service";
import { PostsRepository } from "./posts.repository";

@Injectable()
export class PostsService {
  constructor(
    private readonly postRepository: PostsRepository,
    private readonly fileService: FilesService
  ) {}

  async create(dto: CreatePostDto, image: any) {
    const fileName = await this.fileService.create(image);
    return await this.postRepository.create(dto, fileName);
  }
}
