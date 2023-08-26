import { Metadata } from 'next';
import React from 'react';
import { FullPageScroll, Introduction } from './components';

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
          id: 'introduction2',
          title: 'Introduction2',
          content: <Introduction />,
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
