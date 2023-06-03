import { GraphQLResponse, Environment, Network, Store, RecordSource } from 'relay-runtime';

// Relay is not prescriptive about how GraphQL requests are made.
// This is an example showing how to request GraphQL data.
// You should fill this in with how to make requests to your GraphQL
// API of choice.
import { makeGraphQLRequest } from './my_graphql_api';

export function createServerNetwork() {
  return Network.create(async (text, variables) => {
    const results = await makeGraphQLRequest(text, variables);

    return JSON.parse(JSON.stringify(results)) as GraphQLResponse;
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