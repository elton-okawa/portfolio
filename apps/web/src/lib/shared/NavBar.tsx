import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ThemeButton } from './ThemeButton';

export function NavBar() {
  return (
    <div className="mt-2 flex items-center justify-between">
      <div />
      <div className="inline-flex px-5 bg-base-100 rounded-full shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]">
        <NavLink path="/" name="Home" />
        <NavLink path="/articles" name="Articles" />
      </div>
      <ThemeButton />
    </div>
  );
}

type NavLinkProps = {
  path: string;
  name: string;
};

function NavLink({ path, name }: NavLinkProps) {
  const router = useRouter();
  const active = router.pathname === path;

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
