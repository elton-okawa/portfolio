import Link from 'next/link';
import React from 'react';

export function Logo() {
  return (
    <div>
      <Link
        href="/"
        className="block animate-typing overflow-hidden whitespace-nowrap font-mono font-semibold text-xl text-primary tracking-tight border-y-2 border-transparent hover:border-b-secondary"
      >
        Elton Okawa
      </Link>
    </div>
  );
}
