import { CodegenConfig } from '@graphql-codegen/cli'

const config: CodegenConfig = {
    schema: 'http://localhost:4000/graphql',
    documents: ['src/**/*.graphql'],
    generates: {
        './src/graphql/index.ts': {
            plugins: ['typescript', 'typescript-operations', 'typescript-generic-sdk'],
            config: {
                rawRequest: true
            },
        },
    },
}

export default config