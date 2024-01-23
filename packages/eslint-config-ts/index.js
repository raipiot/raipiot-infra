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
    'airbnb-base',
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'simple-import-sort', 'import', 'unused-imports'],
  root: true,
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
  rules: buildRules({ typescript: true })
}
