# Aug 23, 2023 - Next.js file structure

### Split project files by feature

The idea here is to split files into route segments that uses them:

```
root
  - app
    - components
    - lib
    - ...
    - dashboard
      - components
      - lib
      - ...
  - components (shared)
  - lib (shared)
```

References:

- https://nextjs.org/docs/app/building-your-application/routing/colocation#project-organization-strategies

### Destructure barrel exports

Barrel exports are convenient because it groups together multiple exported files and also hide the internal folder structure:

```tsx
// using barrel
import { Button, NavBar } from "@/components";

// not using
import { Button } from "@/components/Button";
import { NavBar } from "@/components/navbar/NavBar";
```

This convenience comes with a cost of importing all files from that folder, so Next.js compiler does not know which import is being used, so all files comes in the page chunk. Using `App Router` specifically, having `client` and `server` components in the same folder will throw an error because you will be importing `Server Components` in a `Client Component`.

One alternative is adding a `config` that convert your imports:

```ts
const nextConfig = {
  ...
  modularizeImports: {
    components: {
      transform: 'components/{{member}}',
      skipDefaultConversion: true,
      preventFullImport: true,
    },
  },
};
```

It converts:

```tsx
// source
import { Provider } from "./components";

// result
import { Provider } from "./components/Provider";
```

References:

- https://nextjs.org/blog/next-13-1#import-resolution-for-smaller-bundles
- https://nextjs.org/docs/architecture/nextjs-compiler#modularize-imports
- https://uglow.medium.com/burn-the-barrel-c282578f21b6
- https://renatopozzi.me/articles/your-nextjs-bundle-will-thank-you
