import { Injectable } from "@nestjs/common";

import { CreatePostDto } from "./dto/create-post.dto";
import { FilesService } from "src/files/files.service";
import { PostsRepository } from "./posts.repository";
import { IPostService } from "./interfaces/post-service.interface";
import { Post } from "./posts.model";

@Injectable()
export class PostsService implements IPostService {
  constructor(
    private readonly postRepository: PostsRepository,
    private readonly fileService: FilesService
  ) {}

  public async create(dto: CreatePostDto, image: any): Promise<Post> {
    const fileName = await this.fileService.create(image);
    return await this.postRepository.create(dto, fileName);
  }
}
