'use client';

import React from 'react';
import { ThemeButton } from './ThemeButton';
import { Logo } from '@/components';
import { NavLink } from './NavLink';

export function NavBar() {
  return (
    <header className="py-2 fixed top-0 z-10 w-full bg-gradient-to-r from-transparent via-indigo-100 dark:via-gray-800 shadow-sm">
      <div className="flex items-center justify-between max-w-screen-md mx-auto">
        <div className="w-32 flex align-center">
          <Logo />
        </div>
        <nav className="bg-default inline-flex px-5 bg-base-100 rounded-full shadow-[0_0_4px_1px_rgba(0,0,0,0.1)]">
          <NavLink path="/" name="Home" />
          <NavLink path="/projects" name="Projects" />
          <NavLink path="/articles" name="Articles" />
        </nav>
        <div className="w-32 flex justify-end">
          <ThemeButton />
        </div>
      </div>
    </header>
  );
}
