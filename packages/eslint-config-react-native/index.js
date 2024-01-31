const {
  project,
  defaultIgnorePatterns,
  buildOverrides,
  buildRules
} = require('@raipiot-infra/eslint-config-base')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'react-native',
    'react-refresh',
    'simple-import-sort',
    'import',
    'unused-imports'
  ],
  root: true,
  globals: {
    React: true,
    JSX: true
  },
  env: {
    node: true,
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
  ignorePatterns: [...defaultIgnorePatterns],
  overrides: buildOverrides({ typescript: true }),
  rules: buildRules({
    typescript: true,
    reactNative: true
  })
}
