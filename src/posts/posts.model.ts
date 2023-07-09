import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from "sequelize-typescript";

import { User } from "src/users/users.model";

interface PostCreationAttrs {
  title: string;
  content: string;
  userId: string;
  image: string;
}

@Table({ tableName: "posts" })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    primaryKey: true,
    autoIncrement: true,
  })
  id: number;

  @Column({ type: DataType.STRING })
  title: string;

  @Column({ type: DataType.STRING })
  content: string;

  @Column({ type: DataType.STRING })
  image: string;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER })
  userId: number;

  @BelongsTo(() => User)
  author: User;
}
