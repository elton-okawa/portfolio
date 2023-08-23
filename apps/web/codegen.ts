import { CodegenConfig } from '@graphql-codegen/cli';
import { getGraphQLUrl } from './src/lib/apollo/apollo-shared';

const config: CodegenConfig = {
  schema: `${getGraphQLUrl()}/graphql`,
  documents: ['src/**/*.tsx'],
  generates: {
    './src/__generated__/': {
      preset: 'client',
      plugins: [],
      presetConfig: {
        gqlTagName: 'gql',
      },
    },
  },
  ignoreNoDocuments: true,
};

export default config;
