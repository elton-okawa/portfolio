'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from './ApolloProvider';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider attribute="class">
      <ApolloProvider>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
