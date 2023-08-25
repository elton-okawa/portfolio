import React from 'react';
import { Typography, Logo } from '@/components';

export function Footer() {
  return (
    <footer className="flex justify-between p-5 bg-indigo-50 dark:bg-gray-800">
      <div className="flex flex-col items-start">
        <Logo />
        <Typography variant="description">2022-present Elton Okawa</Typography>
      </div>
      {/* TODO add links */}
      <div />
    </footer>
  );
}
