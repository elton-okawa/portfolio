'use client';

import React from 'react';
import { ApolloNextAppProvider } from '@apollo/experimental-nextjs-app-support/ssr';
import { makeClient } from './apollo-client';

export function ApolloProvider({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
