import React from 'react';

import Head from 'next/head';
import { withRelay, RelayProps } from 'relay-nextjs';
import { graphql, usePreloadedQuery } from 'react-relay';
import { getClientEnvironment } from '@/lib/client';
import { pages_HelloQuery } from '@/lib/shared/__generated__/pages_HelloQuery.graphql';
import { NavBar } from '@/lib/shared';

const HelloQuery = graphql`
  query pages_HelloQuery($name: String!) {
    hello(name: $name)
  }
`;

function Home({ preloadedQuery }: RelayProps<object, pages_HelloQuery>) {
  const query = usePreloadedQuery(HelloQuery, preloadedQuery);

  return (
    <div>
      <Head>
        <title>Elton's blog</title>
        <meta name="description" content="Elton's blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container xl mx-auto flex justify-center flex-col">
        <NavBar />
        <h1>{query.hello}</h1>
      </main>
    </div>
  );
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(Home, HelloQuery, {
  fallback: <Loading />,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment()!,
  // serverSideProps: async (ctx) => {
  //   // This is an example of getting an auth token from the request context.
  //   // If you don't need to authenticate users this can be removed and return an
  //   // empty object instead.
  //   const { getTokenFromCtx } = await import('lib/server/auth');
  //   const token = await getTokenFromCtx(ctx);
  //   if (token == null) {
  //     return {
  //       redirect: { destination: '/login', permanent: false },
  //     };
  //   }
  //   return { token };
  // },
  variablesFromContext: () => ({ name: 'from Server!' }),
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async () =>
    // ctx
    // The object returned from serverSideProps
    // { token }: { token: string }
    {
      const { createServerEnvironment } = await import(
        '@/lib/server/server-environment'
      );
      return createServerEnvironment();
    },
});
