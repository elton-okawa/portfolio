import React from 'react';

export function Loading() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentcolor"
      className="animate-spin"
    >
      <circle
        id="track"
        r="10"
        stroke="gray"
        strokeWidth="3"
        cx="50%"
        cy="50%"
        fill="transparent"
      />
      <circle
        id="indicator"
        r="10"
        stroke="currentcolor"
        strokeWidth="3"
        // strokeArc = 2 * PI * radius = 62.8
        // strokeLength = strokeArc / 4 = 15.7
        strokeDasharray="15.7 47.1" // strokeArc remainingArc
        cx="50%"
        cy="50%"
        fill="transparent"
      />
    </svg>
  );
}
