'use client';

import React, { ReactNode, useState } from 'react';
import { Section } from './Section';
import { Indicators } from './Indicators';

type SectionData = {
  id: string;
  title: string;
  content: ReactNode;
};

type FullPageScrollProps = {
  sections: SectionData[];
};

export function FullPageScroll({ sections }: FullPageScrollProps) {
  const [active, setActive] = useState(sections[0].id);

  return (
    <div className="w-full h-full overflow-y-scroll snap-mandatory snap-y scroll-smooth">
      <Indicators
        sections={sections.map((s) => ({
          id: s.id,
          name: s.title,
          active: active === s.id,
        }))}
      />
      {sections.map(({ id, content }) => {
        return (
          <Section key={id} id={id} onVisible={() => setActive(id)}>
            {content}
          </Section>
        );
      })}
    </div>
  );
}
