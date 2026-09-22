import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
  { ignores: ['dist/', '.astro/', 'node_modules/'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...astro.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
    },
  },
  // Lint React components written in .jsx
  {
    files: ['**/*.jsx'],
    languageOptions: {
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
  },
  // Turn off ESLint rules that conflict with Prettier's formatting
  prettier,
];
