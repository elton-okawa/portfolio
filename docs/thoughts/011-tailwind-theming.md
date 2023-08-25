# Aug 25, 2023 - Tailwind theming

### Theming

Tailwind way to add theme colors is by adding the light color and the dark color with prefix `dark:` such as:

```tsx
<div className="bg-indigo-500 dark:bg-indigo-100">...</div>
<p className="text-gray-800 dark:text-gray-300">...</p>
```

It becomes repetitive when we use the same set of colors throughout the application, there are two ways to avoid it and make it easier to change later:

1. **Defining a custom css class**:

```css
@layer components {
  .primary-background {
    @apply bg-indigo-500 dark:bg-indigo-100;
  }
}
```

It works but what if we want to have a similar set of colors for `text` and `borders`? We would need to create a class for them:

```css
@layer components {
  .primary-text {
    @apply text-indigo-500 dark:text-indigo-100;
  }
  .primary-border {
    @apply border-indigo-500 dark:border-indigo-500;
  }
}
```

It's not scalable and convenient

2. **Create a component**

```tsx
export function Background({ children }) {
  return <div className="bg-indigo-500 dark:bg-indigo-100">{children}</div>;
}
```

A similar problem occurs here, we would need to create a component for `text` and I'm sure if it'd work with borders

We have two problems here:

1. The color must be available for all set
2. We need a simple way to define all theme colors at once

Extending Tailwind theme solves one of the problems because the color will be available for all set such as `text-primary`, `border-primary` and `bg-primary`:

```js
// tailwind.config.js
{
  theme: {
    extend: {
      colors: {
        primary: colors.indigo['500'],
      }
    }
  }
}
```

```tsx
<div className="bg-primary">...</div>
<p className="text-primary">...</p>
```

But we still cannot solve (2), the same problems for the proposed solutions exist here.

That's what `tw-colors` solves for us:

```js
// tailwind.config.js
{
  plugins: [
    createThemes(
      {
        light: {
          primary: colors.indigo['500'],
          secondary: colors.orange['400'],
          accent: colors.teal['600'],
        },
        dark: {
          primary: colors.indigo['300'],
          secondary: colors.orange['300'],
          accent: colors.teal['500'],
        },
      },
      { getThemeClassName: (themeName) => themeName }
    ),
  ],
}
```

We can now simply define what we had before and both colors will be applied whenever needed:

```tsx
<div className="bg-primary">...</div>
<p className="text-primary">...</p>
```
