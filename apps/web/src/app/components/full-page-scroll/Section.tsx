'use client';

import React, { ReactNode, useRef, useEffect, useCallback } from 'react';

type SectionProps = {
  id: string;
  children: ReactNode;
  onVisible: () => void;
  className?: string;
};

export function Section({
  id,
  children,
  onVisible,
  className = '',
}: SectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  const handleVisibility = useCallback<IntersectionObserverCallback>(
    (entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        onVisible();
      }
    },
    [onVisible]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleVisibility, {
      threshold: 0.8,
    });
    const node = sectionRef.current;

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, [handleVisibility]);

  return (
    <section
      id={id}
      className={`flex flex-col justify-center snap-center w-full min-h-[calc(100vh-48px)] pb-[48px] ${className}`}
      ref={sectionRef}
    >
      {children}
    </section>
  );
}
