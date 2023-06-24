import 'reflect-metadata';

export * from './types';
import { buildSchema } from 'type-graphql';
import { UserResolver } from './user';
import { HelloResolver } from './hello';
import { PostDao, PostResolver } from './posts';
import { LazyDataloader, LoadersConfig } from './data';
import { GraphQLSchema } from 'graphql';
import { Container } from 'typedi';
import { DatabaseClient } from './shared';
import { Post } from './posts/post.entity';

export const schema: GraphQLSchema = await buildSchema({
  resolvers: [UserResolver, HelloResolver, PostResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
  container: Container,
});

export class GraphQLApi {
  private loadersConfig: LoadersConfig;

  async initialize() {
    await this.configureDatabase();
    this.configureDataloader();
  }

  createDataloader() {
    return new LazyDataloader(this.loadersConfig);
  }

  private async configureDatabase() {
    const database = new DatabaseClient(
      process.env.DB_URL,
      process.env.DB_NAME
    );
    await database.connect();

    Container.set(DatabaseClient, database);
  }

  private configureDataloader() {
    this.loadersConfig = new LoadersConfig();
    this.loadersConfig.register([
      [Post, (ids) => Container.get(PostDao).getByIds(ids)],
    ]);
  }
}
