import '../styles/globals.css';
import React, { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { RelayEnvironmentProvider } from 'react-relay/hooks';
import { useRelayNextjs } from 'relay-nextjs/app';
import { getClientEnvironment } from '@/lib/client';
import { ThemeProvider } from 'next-themes';

function App({ Component, pageProps }: AppProps) {
  const { env, ...relayProps } = useRelayNextjs(pageProps, {
    createClientEnvironment: () => getClientEnvironment()!,
  });

  return (
    <>
      <ThemeProvider attribute="class">
        <RelayEnvironmentProvider environment={env}>
          <Component {...pageProps} {...relayProps} />
        </RelayEnvironmentProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
