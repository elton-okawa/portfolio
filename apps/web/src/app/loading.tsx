import { Loading } from '@/components';
import React from 'react';

export default function LoadingFallback() {
  return (
    <div className="flex justify-center mt-16">
      <div className="text-primary max-w-[64px]">
        <Loading />
      </div>
    </div>
  );
}
