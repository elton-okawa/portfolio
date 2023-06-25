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
  private initialized = false;
  private static singleton: GraphQLApi;
  private initLock: Promise<void>;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  static get instance() {
    if (!GraphQLApi.singleton) {
      console.debug('Creating GraphQLApi instance');
      return new GraphQLApi();
    }

    return GraphQLApi.singleton;
  }

  async initialize() {
    if (!this.initialized && !this.initLock) {
      this.initLock = new Promise((resolve, reject) => {
        this.configureDatabase()
          .then(() => {
            this.configureDataloader();
            this.initialized = true;
            resolve();
          })
          .catch(reject);
      });
    }

    await this.initLock;
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
