import standard from 'eslint-config-standard';

export default [
  {
    ignores: ['templates/**'], // Move ignores from .eslintignore to this config
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
