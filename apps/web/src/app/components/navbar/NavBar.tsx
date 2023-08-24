'use client';

import React from 'react';
import { ThemeButton } from './ThemeButton';
import { Logo } from '@/components';
import { NavLink } from './NavLink';

export function NavBar() {
  return (
    <header className="py-2 fixed top-0 w-full bg-gray-50 dark:bg-gray-700 shadow-sm">
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <div className="w-32 flex align-center">
          <Logo />
        </div>
        <nav className="bg-default inline-flex px-5 bg-base-100 rounded-full shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]">
          <NavLink path="/" name="Home" />
          <NavLink path="/articles" name="Articles" />
        </nav>
        <div className="w-32 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
