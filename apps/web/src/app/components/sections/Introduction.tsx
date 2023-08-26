import React from 'react';

export function Introduction() {
  return (
    <div className="w-full h-full flex flex-col items-start justify-center gap-1">
      <p>{"Hi, I'm"}</p>
      <span>
        <p className="text-4xl text-primary font-semibold overflow-hidden whitespace-nowrap font-mono animate-[typing_1.5s_steps(18,end),blink-caret_1s_step-end_infinite]">
          Elton Yoshio Okawa
        </p>
      </span>
      <span>
        <p className="text-2xl animate-fade-up">
          Full Stack Software Developer with
        </p>
        <p className="text-2xl opacity-0 animate-fade-up animate-delay-1000">
          <span className="text-accent before:content-[counter(count)] before:animate-[counter_1s_linear_forwards] before:animate-delay-1000">
            + years
          </span>{' '}
          of working experience
        </p>
      </span>
      <br />
      <p className="opacity-0 animate-fade animate-delay-2000">
        My values:{' '}
        <span className="text-secondary">
          lifelong learning, empathy, continuous feedback and work-life balance.
        </span>
      </p>
    </div>
  );
}
