import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Context, schema, GraphQLApi } from '@elton-okawa/graphql-schema';

const api = GraphQLApi.instance;

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await api.initialize();

  return createYoga<
    {
      req: NextApiRequest;
      res: NextApiResponse;
    },
    Context
  >({
    schema,
    graphqlEndpoint: '/api/graphql',
    context: () => {
      return { dataloader: api.createDataloader() };
    },
  })(req, res);
}
