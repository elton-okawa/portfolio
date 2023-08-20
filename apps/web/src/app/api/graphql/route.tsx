import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Context, schema, GraphQLApi } from '@elton-okawa/graphql-schema';

const api = GraphQLApi.instance;
await api.initialize();

const { handleRequest } = createYoga<
  { req: NextApiRequest; res: NextApiResponse },
  Context
>({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: () => {
    return { dataloader: api.createDataloader() };
  },
  fetchAPI: { Response },
});

export { handleRequest as GET, handleRequest as POST };
