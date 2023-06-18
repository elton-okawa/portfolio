# Jun 18, 2023 - Transpile package

### Next.js had errors while transpiling packages on monorepo which uses own `tsconfig` with `path` aliases:

```bash
../../packages/<name>
cannot find @/data/file
```

This happens because `tsconfig` of each package is not considered while Next.js is transpiling them.
In order to solve this, I had to transpile each package individually and change it's `package.json` accordingly

```json
{
  ...
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  ...
}
```

### `tsc` does not transpile path aliases

Output `.js` files still have path aliases instead of relative path, which gives error of module not found.
This happens because `tsc` does not replace aliases, so we need to add an external package to do this job for us:

```bash
tsc && tsc-alias
```

References:
- https://github.com/microsoft/TypeScript/issues/5039#issuecomment-232470330

### Inferred type error while building

```bash
error TS2742: The inferred type of 'schema' cannot be named without a reference to '.pnpm/graphql@16.6.0/node_modules/graphql'. This is likely not portable. A type annotation is necessary.

12 export const schema = await buildSchema({
                ~~~~~~
```

Basically on declaration files `.d.ts` there are only `types`, so `inference` does not work here. One way to solve this is to explicitly telling the type:

```ts
import { GraphQLSchema } from "graphql";
export const schema: GraphQLSchema = await buildSchema({...})
```

References:
- https://github.com/microsoft/TypeScript/issues/47663#issuecomment-1519138189
