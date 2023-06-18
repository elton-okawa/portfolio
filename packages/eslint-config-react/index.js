module.exports = {
  plugins: ["react", "@typescript-eslint"],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier", // must be the last one
  ],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["node_modules", "dist", "build", "*.gql", "*.graphql", ".turbo", ".next", ".vercel"],
  rules: {
    '@typescript-eslint/no-non-null-assertion': 'off',
  },
};
