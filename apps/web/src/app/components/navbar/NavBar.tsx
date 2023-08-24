'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeButton } from './ThemeButton';
import { Logo } from './Logo';

export function NavBar() {
  return (
    <div className="mt-2 flex items-center justify-between">
      <div className="w-32 flex align-center">
        <Logo />
      </div>
      <div className="bg-default inline-flex px-5 bg-base-100 rounded-full shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]">
        <NavLink path="/" name="Home" />
        <NavLink path="/articles" name="Articles" />
      </div>
      <div className="w-32 flex justify-end">
        <ThemeButton />
      </div>
    </div>
  );
}

type NavLinkProps = {
  path: string;
  name: string;
};

function NavLink({ path, name }: NavLinkProps) {
  const pathname = usePathname();
  // Home path '/' is included in all pathnames
  const active = path === '/' ? pathname === path : pathname.startsWith(path);

  return (
    <Link
      href={path}
      className={`p-2 hover:text-secondary ${
        active && 'text-primary border-primary border-b-2'
      }`}
    >
      {name}
    </Link>
  );
}
