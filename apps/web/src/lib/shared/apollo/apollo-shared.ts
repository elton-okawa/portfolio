import { HttpLink } from '@apollo/client';

export function makeHttpLink() {
  const url = getUrl();

  return new HttpLink({
    uri: `${url}/graphql`,
  });
}

function getUrl() {
  return process.env.PUBLIC_URL;
}
