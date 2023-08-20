'use client';

import React from 'react';
import { ThemeProvider } from 'next-themes';
import { ApolloProvider } from '@/lib/shared';

type ProvidersProps = {
  children: React.ReactNode;
};

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <ApolloProvider>{children}</ApolloProvider>
    </ThemeProvider>
  );
}
