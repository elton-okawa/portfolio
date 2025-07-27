'use client';

import React from 'react';
import { ThemeButton } from './ThemeButton';
import { Logo } from '@/components';
import { NavLink } from './NavLink';

export function NavBar() {
  return (
    <header className="flex flex-col justify-end sticky top-0 z-10 w-full h-[48px] bg-default shadow-md">
      <div className="flex items-center justify-around container mx-auto">
        <div className="w-32 flex align-center">
          <Logo />
        </div>
        <nav className="inline-flex px-5">
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
