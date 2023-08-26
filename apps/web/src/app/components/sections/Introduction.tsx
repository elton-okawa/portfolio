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
        {/* <h3 className={[styles.slideInUp]}> */}
        <h3>Full Stack Software Developer with</h3>
        {/* <h3
            extraClasses={[
              styles.delayFirst,
              styles.slideInUp,
              styles.workingExperience,
            ]}
          > */}
        <h3>
          <span className="text-accent">+ years</span> of working experience
        </h3>
      </span>
      <br />
      {/* <p extraClasses={[styles.summary]}> */}
      <p>
        My values:{' '}
        <span className="text-secondary">
          lifelong learning, empathy, continuous feedback and work-life balance.
        </span>
      </p>
    </div>
  );
}
