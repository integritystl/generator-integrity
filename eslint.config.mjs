import standard from 'eslint-config-standard';

export default [
  // Global ignores: eslint only treats `ignores` as global when it is the
  // object's sole key, so these must live in their own entry.
  {
    ignores: ['generators/app/templates/**', 'templates/**', 'dist/**'],
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        // Replace `env` with specific globals
        window: 'readonly',
        document: 'readonly',
        describe: 'readonly',
        it: 'readonly',
        before: 'readonly',
        after: 'readonly',
      },
    },
    plugins: {
      standard,
    },
    rules: {
      quotes: ['error', 'single', { allowTemplateLiterals: true }],
    },
  },
];
