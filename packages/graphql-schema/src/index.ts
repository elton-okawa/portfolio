import "reflect-metadata";

export * from './types';
import { buildSchema } from "type-graphql";
import { UserResolver } from "./user";
import { HelloResolver } from './hello';
import { PostResolver } from "./posts";
import { LazyDataloader } from "./data/lazy-dataloader";
import { LoadersConfig } from "./data/loaders-config";
import { Post } from "./posts/post";
import { GraphQLSchema } from "graphql";

export const schema: GraphQLSchema = await buildSchema({
  resolvers: [UserResolver, HelloResolver, PostResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});

const posts = [
  { id: '1', title: 'one' },
  { id: '2', title: 'two' },
  { id: '3', title: 'three' },
]

const loadersConfig = new LoadersConfig();
loadersConfig.register([
  [Post, (ids) => new Promise(resolve => {
    resolve(posts.filter(post => ids.includes(post.id)));
  })]
])

export const createDataloader = () => new LazyDataloader(loadersConfig);
