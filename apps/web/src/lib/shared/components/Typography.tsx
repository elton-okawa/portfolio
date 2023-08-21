import React from 'react';

type TypographyComponent = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'body';

type TypographyVariant = 'text' | 'description';

type TypographyProps = React.PropsWithChildren<{
  component?: TypographyComponent;
  variant?: TypographyVariant;
  className?: string;
}>;

const htmlComponentMapping: Record<TypographyComponent, React.ElementType> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body: 'p',
};

const variantToColor: Record<TypographyVariant, string> = {
  text: 'text-black dark:text-white',
  description: 'text-slate-500 dark:text-slate-400',
};

export function Typography({
  component = 'body',
  variant = 'text',
  children,
  className = '',
}: TypographyProps) {
  const Component = htmlComponentMapping[component];
  const color = variantToColor[variant];

  return <Component className={`${color} ${className}`}>{children}</Component>;
}
