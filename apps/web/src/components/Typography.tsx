import React from 'react';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

type TypographyVariant = 'text' | 'description';

type TypographyProps = React.PropsWithChildren<{
  component?: TypographyComponent;
  variant?: TypographyVariant;
  className?: string;
  anchor?: boolean;
}>;

const componentToClasses: Record<TypographyComponent, string> = {
  h1: 'text-4xl mt-5 mb-1',
  h2: 'text-3xl mt-5 mb-1',
  h3: 'text-2xl mt-5 mb-1',
  h4: 'text-xl mt-5 mb-1',
  h5: 'text-lg mt-5 mb-1',
  h6: 'text-base mt-5 mb-1',
  p: 'text-base mb-3',
};

const variantToColor: Record<TypographyVariant, string> = {
  text: 'text-black dark:text-white',
  description: 'text-slate-500 dark:text-slate-400',
};

export function Typography({
  component = 'p',
  variant = 'text',
  children,
  className = '',
}: TypographyProps) {
  const Component = component;
  const classes = componentToClasses[component];
  const color = variantToColor[variant];

  return (
    <Component className={`${classes} ${color} ${className}`}>
      {children}
    </Component>
  );
}
