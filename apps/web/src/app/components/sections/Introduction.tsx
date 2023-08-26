import React from 'react';

export function Introduction() {
  return (
    <div className="max-w-lg flex flex-col items-start justify-center gap-1">
      <h6>{"Hi, I'm"}</h6>
      <span>
        {/* <h2 className={[styles.typewriter, styles.name]}> */}
        <h2>Elton Yoshio Okawa</h2>
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
