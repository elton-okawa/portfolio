import { DatabaseModule, DATABASE_KEY } from '@/database';
import { Module } from '@nestjs/common';
import { Db } from 'mongodb';
import { ArticlesService } from './articles.service';
import { DataloaderModule } from '@/graphql-dataloader';

@Module({
  imports: [DatabaseModule, DataloaderModule],
  providers: [
    {
      provide: 'ARTICLE_MODEL',
      useFactory: (db: Db) => db.collection('articles'),
      inject: [DATABASE_KEY],
    },
    ArticlesService,
  ],
  exports: [ArticlesService],
})
export class ArticlesModule {}
