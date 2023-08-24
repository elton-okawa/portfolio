import React from 'react';
import { Logo } from '../navbar/Logo';
import { Typography } from '@/components';

export function Footer() {
  return (
    <footer className="flex justify-between p-5 bg-blue-50">
      <div className="flex flex-col items-start">
        <Logo />
        <Typography variant="description">2022-present Elton Okawa</Typography>
      </div>
      {/* TODO add links */}
      <div />
    </footer>
  );
}
