import { HttpLink } from '@apollo/client';
import {
  NextSSRInMemoryCache,
  NextSSRApolloClient,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

export const { getClient } = registerApolloClient(() => {
  // View thoughts/008-apollo-client
  const url =
    process.env.PUBLIC_URL ?? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`;

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: new HttpLink({
      uri: `${url}/api/graphql`,
    }),
  });
});
