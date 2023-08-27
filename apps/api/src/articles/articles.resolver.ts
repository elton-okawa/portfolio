import { Resolver, Args, Query, Context } from '@nestjs/graphql';
import { ArticleType } from './article.type';
import { GraphQLContext } from '@/shared';
import { ArticlesService } from './articles.service';

@Resolver(() => ArticleType)
export class ArticlesResolver {
  constructor(private articlesService: ArticlesService) {}

  @Query(() => ArticleType)
  async article(@Args('slug') slug: string, @Context() ctx: GraphQLContext) {
    const article = ctx.dataloader.get(ArticleType).load(slug);
    if (!article) {
      throw new Error('article not found');
    }

    return article;
  }

  @Query(() => [ArticleType])
  async articles() {
    return this.articlesService.list();
  }
}
