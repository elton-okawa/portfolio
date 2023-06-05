import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { UserResolver } from "./user";
import { HelloResolver } from './hello';

export const schema = await buildSchema({
  resolvers: [UserResolver, HelloResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
