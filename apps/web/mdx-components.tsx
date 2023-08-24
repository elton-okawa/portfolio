import React from 'react';
import { Typography } from '@/components';
import type { MDXComponents } from 'mdx/types';
import { SectionAnchor } from '@/components/SectionAnchor';

// This file allows you to provide custom React components
// to be used in MDX files. You can import and use any
// React component you want, including components from
// other libraries.

// This file is required to use MDX in `app` directory.
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    // h1: ({ children }) => <h1 style={{ fontSize: "100px" }}>{children}</h1>,
    h1: ({ children }) => <Typography component="h1">{children}</Typography>,
    h2: ({ children }) => <Typography component="h2">{children}</Typography>,
    h3: ({ children }) => <Typography component="h3">{children}</Typography>,
    p: ({ children }) => <Typography component="p">{children}</Typography>,
    SectionAnchor,
    ...components,
  };
}
