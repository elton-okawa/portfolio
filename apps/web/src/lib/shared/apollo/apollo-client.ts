import { ApolloLink } from '@apollo/client';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';
import { makeHttpLink } from './apollo-shared';
import { IS_CLIENT } from '@/lib/shared/constants';

export function makeClient() {
  const httpLink = makeHttpLink();

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link: IS_CLIENT
      ? ApolloLink.from([
          new SSRMultipartLink({
            stripDefer: true,
          }),
          httpLink,
        ])
      : httpLink,
  });
}
