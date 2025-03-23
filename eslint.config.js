import globals from 'globals';
import pluginJs from '@eslint/js';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.browser,
        ...globals.vitest,
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: [
      '__tests__/**/*.{js,mjs,cjs}',
      '__fixtures__/**/*.{js,mjs,cjs}',
    ],
    ...testingLibrary.configs['flat/dom'],
    ...jestDom.configs['flat/recommended'],
  },
];
