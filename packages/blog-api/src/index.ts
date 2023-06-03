import "reflect-metadata";

import { buildSchema } from "type-graphql";
import { UserResolver } from "./user";

export const schema = await buildSchema({
  resolvers: [UserResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});
