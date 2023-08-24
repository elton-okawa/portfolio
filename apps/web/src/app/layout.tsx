import React from 'react';
import { Metadata } from 'next';
import '../styles/globals.css';

import { Providers, NavBar } from './components';

export const metadata: Metadata = {
  title: 'Home',
  description: 'Welcome to Next.js',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // next-themes updates html properties, this property only applies to the added element
    // and not deeply into DOM tree
    // https://react.dev/reference/react-dom/hydrate#suppressing-unavoidable-hydration-mismatch-errors
    <html suppressHydrationWarning>
      <body className="bg-gray-50 dark:bg-gray-700">
        <Providers>
          <main className="flex justify-center flex-col max-w-screen-md mx-auto px-5 gap-2">
            <NavBar />
            {children}
          </main>
        </Providers>
      </body>
    </html>
  );
}
