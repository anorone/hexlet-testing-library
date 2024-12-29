import globals from 'globals';
import pluginJs from '@eslint/js';
import testingLibrary from 'eslint-plugin-testing-library';
import jestDom from 'eslint-plugin-jest-dom';

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      globals: globals.browser,
    },
    plugins: {
      testingLibrary,
      jestDom,
    },
  },
  pluginJs.configs.recommended,
];
