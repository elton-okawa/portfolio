'use client';

import React, { ReactNode, useState } from 'react';
import { Section } from './Section';

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
      <div className="fixed top-1/2 right-[100px] translate-[-50%] mx-auto flex flex-col gap-[30px]">
        {sections.map(({ id, title }) => (
          <a
            key={id}
            className={
              'relative p-[10px]' + active === id
                ? 'after:bg-primary after:translate-[-50%] after:scale-150'
                : ''
            }
            href={`#${id}`}
            data-title={title}
          />
        ))}
      </div>
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
