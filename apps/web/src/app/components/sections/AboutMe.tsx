import React from 'react';
import AboutMeText from './about-me.mdx';
import { AccentTitle } from '@/components';

export function AboutMe() {
  return (
    <div className="max-w-screen-md m-auto">
      <AccentTitle>About me</AccentTitle>
      <AboutMeText />
    </div>
  );
}
