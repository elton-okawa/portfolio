import { Metadata } from 'next';
import React from 'react';
import { NavBar } from '@/lib/shared';

export const metadata: Metadata = {
  title: "Elton's blog",
};

export default function Page() {
  return (
    <main className="container xl mx-auto flex justify-center flex-col">
      <NavBar />
      <h1>{'test'}</h1>
    </main>
  );
}
