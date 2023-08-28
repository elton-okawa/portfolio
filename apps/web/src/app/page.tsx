import { Metadata } from 'next';
import React from 'react';
import { AboutMe, FullPageScroll, Introduction, Projects } from './components';

export const metadata: Metadata = {
  title: "Elton's personal website",
};

export default function Page() {
  return (
    <FullPageScroll
      sections={[
        {
          id: 'introduction',
          title: 'Introduction',
          content: <Introduction />,
        },
        {
          id: 'about-me',
          title: 'About Me',
          content: <AboutMe />,
        },
        {
          id: 'projects',
          title: 'Projects',
          content: <Projects />,
        },
        // {
        //   id: 'contact',
        //   title: 'Contacts',
        //   content: <Contacts />,
        // },
      ]}
    />
  );
}
