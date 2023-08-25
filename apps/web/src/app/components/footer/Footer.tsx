import React from 'react';
import { Logo } from '@/components';

export function Footer() {
  return (
    <footer className="bg-indigo-50 dark:bg-gray-800">
      <div className="flex justify-between max-w-screen-md py-5 mx-auto">
        <div className="flex flex-col items-start">
          <Logo />
          <p className="text-description">2022-present Elton Okawa</p>
        </div>
        {/* TODO add links */}
        <div />
      </div>
    </footer>
  );
}
