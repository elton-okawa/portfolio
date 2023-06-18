module.exports = {
  src: './src',
  schema: 'schema.gql',
  exclude: ['**/node_modules/**', '**/__mocks__/**', '**/__generated__/**'],
  language: 'typescript',
  artifactDirectory: 'src/lib/shared/__generated__',
};
