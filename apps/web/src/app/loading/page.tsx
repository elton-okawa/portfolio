import React from 'react';

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function Page() {
  await sleep(process.env.NODE_ENV === 'development' ? 60000 : 1000);

  return <p>Page to test load!</p>;
}
