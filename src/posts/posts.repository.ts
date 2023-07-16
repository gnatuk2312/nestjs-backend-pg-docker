import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";

import { Post } from "./posts.model";
import { CreatePostDto } from "./dto/create-post.dto";
import { IPostRepository } from "./interfaces/post-repository.interface";

@Injectable()
export class PostsRepository implements IPostRepository {
  constructor(
    @InjectModel(Post) private readonly postRepository: typeof Post
  ) {}

  public async create(dto: CreatePostDto, image: string): Promise<Post> {
    const { title, content, userId } = dto;

    return await this.postRepository.create({ title, content, userId, image });
  }
}
