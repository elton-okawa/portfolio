import { Arg, Ctx, Query, Resolver } from 'type-graphql';
import { PostType } from './post.type';
import { Context } from '../types';
import { Service } from 'typedi';

@Service()
@Resolver(PostType)
export class PostResolver {
  @Query(() => PostType)
  async post(@Arg('id') id: string, @Ctx() ctx: Context) {
    const post = ctx.dataloader.get(PostType).load(id);
    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }
}
