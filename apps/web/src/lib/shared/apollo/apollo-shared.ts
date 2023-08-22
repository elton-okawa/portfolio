import { HttpLink } from '@apollo/client';

export function makeHttpLink() {
  const url = getGraphQLUrl();

  return new HttpLink({
    uri: `${url}/graphql`,
  });
}

export function getGraphQLUrl() {
  return process.env.NEXT_GRAPHQL_URL;
}
