import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="inline-block animate-typing overflow-hidden whitespace-nowrap font-mono font-semibold text-xl text-primary tracking-tight border-b-2 border-transparent hover:border-secondary"
      >
        Elton Okawa
      </Link>
    </div>
  );
}
