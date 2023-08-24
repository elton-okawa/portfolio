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
  h1: 'text-4xl',
  h2: 'text-3xl',
  h3: 'text-2xl',
  h4: 'text-xl',
  h5: 'text-lg',
  h6: 'text-base',
  p: 'text-base',
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
