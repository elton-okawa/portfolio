import { DataloaderService } from '@/graphql-dataloader';
import { Inject, Injectable } from '@nestjs/common';
import { Article } from './article.model';
import { Collection, ObjectId } from 'mongodb';
import { plainToInstance } from 'class-transformer';
import { ArticleType } from './article.type';

@Injectable()
export class ArticlesService {
  constructor(
    @Inject('ARTICLE_MODEL') private articles: Collection<Article>,
    private dataloaderService: DataloaderService,
  ) {
    this.dataloaderService.register(ArticleType, this.getByIds.bind(this));
  }

  async getByIds(ids: readonly string[]): Promise<Article[]> {
    const objIds = ids.map((id) => new ObjectId(id));
    const data = await this.articles.find({ _id: { $in: objIds } }).toArray();

    return plainToInstance(Article, data);
  }

  async list(): Promise<Article[]> {
    const posts = await this.articles.find().toArray();
    return plainToInstance(Article, posts);
  }
}
