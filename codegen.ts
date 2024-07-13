import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
  schema: 'http://localhost:1337/graphql',
  documents: ['src/graphql/**/*.ts'],
  generates: {
    './src/graphql/generated/': {
      preset: 'client',
      presetConfig: {
        gqlTagName: 'gql',
        fragmentMasking: false
      },
      config: {
        //avoidOptionals: true
        enumsAsTypes: true
      }
    }
  },
  ignoreNoDocuments: true
}

export default config
