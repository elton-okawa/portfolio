import React from 'react';

type IndicatorProps = {
  sections: { id: string; name: string; active: boolean }[];
};

export function Indicators({ sections }: IndicatorProps) {
  return (
    <div className="fixed top-1/2 right-[50px] mx-auto flex flex-col gap-[30px]">
      {sections.map(({ id, name, active }) => (
        <a
          key={id}
          className={`relative p-[10px] after:transition after:ease-linear after:absolute after:w-[10px] after:h-[10px] after:rounded-[50%] ${
            active ? 'after:bg-primary after:scale-150' : 'after:bg-gray-400'
          }`}
          href={`#${id}`}
          data-title={name}
        />
      ))}
    </div>
  );
}
