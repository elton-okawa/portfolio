import React from 'react';
import { Metadata } from 'next';
import '../styles/globals.css';

import { Providers, NavBar, Footer, EasterEgg } from './components';

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
      <body className="flex flex-col bg-gray-50 dark:bg-gray-700 font-sans">
        <Providers>
          <NavBar />
          <div className="h-[calc(100%-48px)] overflow-auto">
            <main className="flex flex-col flex-1 gap-2 min-h-full">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
        <EasterEgg />
      </body>
    </html>
  );
}
