import React from 'react';

export function EmphasisQuote({ text }: { text: string }) {
  return (
    <p className="italic text-lg text-center p-5 bg-gray-200 dark:bg-gray-800">
      {text}
    </p>
  );
}
