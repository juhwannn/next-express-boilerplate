module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended'],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaFeatures: {
      globalReturn: false,
    },
    ecmaVersion: 13,
    sourceType: 'module',
    allowImportExportEverywhere: false,
  },
  plugins: ['node', 'import'],
  rules: {
    'arrow-body-style': 0,
    'no-underscore-dangle': 0,
    'node/no-missing-require': 'error',
    'import/no-unresolved': ['error', { caseSensitive: false }],
    'import/prefer-default-export': 0,
    'import/named': 0,
    'import/no-extraneous-dependencies': 0,
  },
}
