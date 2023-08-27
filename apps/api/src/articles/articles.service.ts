import { DataloaderService } from '@/graphql-dataloader';
import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article.model';
import { Collection } from 'mongodb';
import { plainToInstance } from 'class-transformer';
import { ArticleType } from './article.type';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('ARTICLE_MODEL') private articles: Collection<Article>,
    private dataloaderService: DataloaderService,
  ) {
    this.dataloaderService.register(ArticleType, this.getBySlugs.bind(this));
  }

  async getBySlugs(slugs: readonly string[]): Promise<Article[]> {
    const data = await this.articles.find({ slug: { $in: slugs } }).toArray();

    return plainToInstance(Article, data);
  }

  async list(): Promise<Article[]> {
    const posts = await this.articles.find().toArray();
    return plainToInstance(Article, posts);
  }
}
