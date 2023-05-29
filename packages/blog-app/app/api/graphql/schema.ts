import { buildSchema } from "type-graphql";
import { UserResolver } from "./user";

const schema = await buildSchema({
  resolvers: [UserResolver],
  emitSchemaFile: process.env.NODE_ENV === 'development',
});

export default schema;