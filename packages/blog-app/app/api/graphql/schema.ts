import { buildSchema } from "type-graphql";
import { UserResolver } from "./user";

const schema = await buildSchema({
  resolvers: [UserResolver],
});

export default schema;