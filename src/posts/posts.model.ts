import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

import { User } from "src/users/users.model";
import { IPost } from "./interfaces/post.interface";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: string;
  image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> implements IPost {
  @ApiProperty({ example: "1", description: "unique id" })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @ApiProperty({
    example: "How to choose software dev partner",
    description: "Post title",
  })
  @Column({ type: DataType.STRING })
  title: string;

  @ApiProperty({
    example: "First of all you need ...",
    description: "Post content",
  })
  @Column({ type: DataType.STRING })
  content: string;

  @ApiProperty({ example: "/filename.jpg", description: "Image path" })
  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
