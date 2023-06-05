import { Environment, Network, Store, RecordSource, GraphQLResponse } from 'relay-runtime';

import { createYoga } from 'graphql-yoga'
import type { NextApiRequest, NextApiResponse } from 'next'
import { schema } from '@elton-okawa/graphql-schema';

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql'
});

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    const response = await yoga.fetch(
      yoga.graphqlEndpoint,
      {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: params.text,
          variables,
        }),
      },
      // Third parameter becomes your server context
      // ctx
    );

    return response.json();
  });
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}