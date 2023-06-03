import { Environment, Network, Store, RecordSource, GraphQLResponse } from 'relay-runtime';

import { makeGraphQLRequest } from '../shared/makeGraphQLRequest';

export function createServerNetwork() {
  // return Network.create(makeGraphQLRequest);
  return Network.create(async () => ({ data: { hello: 'test' }, errors: [] }));
}

// Optional: this function can take a token used for authentication and pass it into `createServerNetwork`.
export function createServerEnvironment() {
  return new Environment({
    network: createServerNetwork(),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}