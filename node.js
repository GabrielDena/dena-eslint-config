module.exports = {
    env: {
        es2021: true,
        node: true,
        'jest/globals': true,
    },
    extends: ['standard', 'plugin:prettier/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: ['@typescript-eslint', 'jest'],
    rules: {
        'prettier/prettier': [
            'error',
            {
                printWidth: 100,
                tabWidth: 4,
                singleQuote: true,
                trailingComma: 'all',
                arrowParens: 'always',
            },
        ],
        'no-useless-constructor': 0,
    },
    settings: {
        'import/parsers': {
            [require.resolve('@typescript-eslint/parser')]: ['.ts', '.tsx', '.d.ts'],
        },
    },
};
