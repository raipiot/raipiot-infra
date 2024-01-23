const {
  project,
  defaultIgnorePatterns,
  buildOverrides,
  buildRules
} = require('@raipiot-infra/eslint-config-base')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'eslint-config-turbo',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'unused-imports'],
  root: true,
  env: {
    browser: true,
    es2023: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      },
      node: {
        extensions: ['.js', '.cjs', '.mjs', '.ts', '.cts', '.mts', '.tsx', '.d.ts']
      }
    }
  },
  reportUnusedDisableDirectives: true,
  /**
   * NOTE: `vue-eslint-parser` doesn't work in `overrides`.
   */
  parser: 'vue-eslint-parser',
  parserOptions: {
    project,
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.vue'],
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  ignorePatterns: [...defaultIgnorePatterns],
  overrides: buildOverrides({ typescript: true }),
  rules: buildRules({
    typescript: true,
    vue: true,
    tailwindCSS: true
  })
}
