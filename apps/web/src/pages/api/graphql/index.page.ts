import { createYoga } from 'graphql-yoga';
import type { NextApiRequest, NextApiResponse } from 'next';
import { Context, createDataloader, schema } from '@elton-okawa/graphql-schema';

export default createYoga<
  {
    req: NextApiRequest;
    res: NextApiResponse;
  },
  Context
>({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: () => {
    return { dataloader: createDataloader() };
  },
});
