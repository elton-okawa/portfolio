import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createDataloader, schema } from '@elton-okawa/graphql-schema';
import { Context } from '@/lib/shared';

export default createYoga<{
  req: NextApiRequest
  res: NextApiResponse
}, Context>({
  schema,
  graphqlEndpoint: '/api/graphql',
  context: () => {
    return { dataloader: createDataloader() }
  }
})
