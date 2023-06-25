import { Environment, Network, Store, RecordSource } from 'relay-runtime';

import { createYoga } from 'graphql-yoga';
import { GraphQLApi, schema } from '@elton-okawa/graphql-schema';

const yoga = createYoga({
  schema,
  graphqlEndpoint: '/api/graphql',
});

const api = GraphQLApi.instance;

export function createServerNetwork() {
  return Network.create(async (params, variables) => {
    await api.initialize();

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
      { dataloader: api.createDataloader() }
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
