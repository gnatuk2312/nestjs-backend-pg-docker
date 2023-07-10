import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Post } from "./posts.model";
import { CreatePostDto } from "./dto/create-post.dto";

@Injectable()
export class PostsRepository {
  constructor(
    @InjectModel(Post) private readonly postRepository: typeof Post
  ) {}

  async create(dto: CreatePostDto, image: string) {
    const { title, content, userId } = dto;

    return await this.postRepository.create({ title, content, userId, image });
  }
}
