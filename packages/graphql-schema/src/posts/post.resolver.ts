import { Arg, Ctx, Query, Resolver } from "type-graphql";
import { Post } from "./post";
import { Context } from "../types";

@Resolver(Post)
export class PostResolver {
  @Query(returns => Post)
  async post(@Arg('id') id: string, @Ctx() ctx: Context) {
    const post = ctx.dataloader.get(Post).load(id);
    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
}