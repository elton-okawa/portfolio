import { Metadata } from 'next';
import React from 'react';
import { AboutMe, FullPageScroll, Introduction } from './components';

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
        // {
        //   id: 'experience',
        //   title: 'Experience',
        //   content: <Experience experience={experience} />,
        // },
        // {
        //   id: 'portifolio',
        //   title: 'Portifolio',
        //   content: <UnderConstruction title="Portifolio" />,
        // },
        // {
        //   id: 'contact',
        //   title: 'Contacts',
        //   content: <Contacts />,
        // },
      ]}
    />
  );
}
