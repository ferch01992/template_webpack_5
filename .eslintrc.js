module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'standard', 'prettier'],
  globals: {
    Blob: true,
    FileReader: true,
    FormData: true,
    document: true,
    localStorage: true,
    navigator: true,
    window: true,
  },
  parserOptions: {
    ecmaFeatures: {
      js: true,
      jsx: true,
      scss: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    'prettier/prettier': 'error',
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ],
    'sort-keys': [
      'error',
      'asc',
      { caseSensitive: true, minKeys: 2, natural: false },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
