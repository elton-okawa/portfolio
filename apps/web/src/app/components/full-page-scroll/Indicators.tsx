import React from 'react';

type IndicatorProps = {
  sections: { id: string; name: string; active: boolean }[];
};

export function Indicators({ sections }: IndicatorProps) {
  return (
    <div className="fixed top-[calc(50%-48px)] right-[50px] flex flex-col gap-[30px]">
      {sections.map(({ id, name, active }) => (
        <a
          key={id}
          className={`transition ease-linear w-[12px] h-[12px] rounded-[50%] ${
            active ? 'bg-primary scale-125' : 'bg-gray-400 dark:bg-gray-800'
          }`}
          href={`#${id}`}
          data-title={name}
        />
      ))}
    </div>
  );
}
