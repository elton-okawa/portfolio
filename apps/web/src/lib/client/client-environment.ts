import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { makeGraphQLRequest } from './makeGraphQLRequest';

export function createClientNetwork() {
  return Network.create(makeGraphQLRequest);
}

let clientEnv: Environment | undefined;
export function getClientEnvironment() {
  if (typeof window === 'undefined') return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(),
      store: new Store(new RecordSource()),
      isServer: false,
    });
  }

  return clientEnv;
}
