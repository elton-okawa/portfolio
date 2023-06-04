import { FetchFunction } from "relay-runtime";

export const makeGraphQLRequest: FetchFunction = async (params, variables) => {
  const response = await fetch('/api/graphql', {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: params.text,
      variables,
    }),
  });

  const json = await response.text();
  return JSON.parse(json);
}
