import { Resolver, Args, Query, Context } from '@nestjs/graphql';
import { PostType } from './post.type';
import { GraphQLContext } from '@/shared';
import { PostsService } from './posts.service';

@Resolver(() => PostType)
export class PostsResolver {
  constructor(private postsService: PostsService) {}

  @Query(() => PostType)
  async post(@Args('id') id: string, @Context() ctx: GraphQLContext) {
    const post = ctx.dataloader.get(PostType).load(id);
    if (!post) {
      throw new Error('Post not found');
    }

    return post;
  }

  @Query(() => [PostType])
  async posts() {
    return this.postsService.list();
  }
}
