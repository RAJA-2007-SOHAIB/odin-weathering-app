import js from '@eslint/js';
import globals from 'globals';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier'; // <-- 1. Import prettier config

export default defineConfig([
  {
    files: ['**/*.{js,mjs,cjs}'],
    plugins: { js },
    extends: ['js/recommended'],
    languageOptions: {
      globals: globals.browser,
      ecmaVersion: 'latest', // <-- 2. Allow modern JS (async/await)
    },
  },
  eslintConfigPrettier, // <-- 3. Put this last so it overrides ESLint formatting
]);
