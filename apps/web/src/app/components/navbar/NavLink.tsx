import React from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type NavLinkProps = {
  path: string;
  name: string;
};

export function NavLink({ path, name }: NavLinkProps) {
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
