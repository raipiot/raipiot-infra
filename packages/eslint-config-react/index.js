const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off'
  return acc
}, {})

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    'plugin:tailwindcss/recommended',
    'eslint:recommended',
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@tanstack/eslint-plugin-query/recommended',
    'eslint-config-turbo',
    'plugin:storybook/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier'
  ],
  plugins: [
    '@typescript-eslint',
    'react',
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
    browser: true
  },
  settings: {
    'import/resolver': {
      typescript: {
        project
      }
    }
  },
  reportUnusedDisableDirectives: true,
  ignorePatterns: ['.*.js', 'node_modules/', 'dist/'],
  overrides: [
    {
      files: ['*.{js,cjs,mjs,jsx}'],
      extends: ['plugin:@typescript-eslint/disable-type-checked'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        '@typescript-eslint/no-require-imports': 'off'
      }
    },
    {
      files: ['*.d.ts'],
      rules: {
        'import/no-duplicates': 'off'
      }
    },
    {
      files: ['*.{ts,tsx,cts,mts}'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project,
        ecmaVersion: 'latest',
        sourceType: 'module'
      },
      rules: {
        'no-undef': 'off',
        'react/jsx-no-undef': 'off' // 由 TypeScript 静态检查
      }
    }
  ],
  rules: {
    quotes: ['error', 'single'], // 强制使用单引号
    semi: ['error', 'never'], // 禁止使用分号
    'no-unused-vars': 'off',
    'class-methods-use-this': 'off', // 允许类方法不使用 this
    'no-param-reassign': [
      'warn',
      {
        props: true,
        ignorePropertyModificationsFor: ['target', 'descriptor', 'req', 'request', 'args', 'draft'],
        ignorePropertyModificationsForRegex: ['^item', 'Item$']
      }
    ], // 允许修改函数参数，但是会有警告
    // eslint-plugin-unused-imports
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_'
      }
    ],

    // eslint-plugin-simple-import-sort
    'simple-import-sort/imports': 'error', // import 排序
    'simple-import-sort/exports': 'error', // export 排序

    // eslint-plugin-import
    'import/order': 'off', // 禁用 import 排序，使用 simple-import-sort
    'import/first': 'error', // import 必须放在文件顶部
    'import/newline-after-import': 'error', // import 之后必须空一行
    'import/no-unresolved': 'off', // 允许导入未解析的模块
    'import/no-absolute-path': 'off', // 允许导入绝对路径
    'import/no-duplicates': 'error', // 禁止重复导入
    'import/extensions': 'off', // 允许导入时带文件扩展名
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        peerDependencies: true,
        optionalDependencies: false
      }
    ], // 允许 devDependencies，peerDependencies，不允许 optionalDependencies
    'import/no-mutable-exports': 'error', // 禁止导出 let, var 声明的变量
    'import/no-self-import': 'error', // 禁止自导入
    'import/prefer-default-export': 'off', // 仅导出一个变量时，不要求默认导出

    // typescript-eslint
    '@typescript-eslint/no-explicit-any': 'off', // 由 TS 静态检查
    '@typescript-eslint/comma-dangle': 'off', // 由 Prettier 处理
    '@typescript-eslint/consistent-type-imports': 'error', // 强制使用 import type
    '@typescript-eslint/triple-slash-reference': 'off', // 允许使用 /// <reference path="" />
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: false
      }
    ],

    // react
    'react/destructuring-assignment': 'off', // 允许使用解构赋值
    'react/prop-types': 'off', // 不必校验 props
    'react/require-default-props': 'off', // 不必要求默认 props
    'react/react-in-jsx-scope': 'off', // React 17 后不需要引入 React
    'react/jsx-uses-react': 'off', // React 17 后不需要引入 React
    'react/jsx-props-no-spreading': 'off', // 允许使用 ... 扩展 props
    'react/jsx-filename-extension': ['warn', { extensions: ['jsx', '.tsx'] }], // JSX 文件使用 .jsx 或 .tsx 扩展名
    'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }], // 允许使用 <></> 包裹表达式，如 <>{children}</>
    'react/no-array-index-key': 'off', // 允许使用数组索引作为 key
    'react/no-unstable-nested-components': [
      'error',
      {
        allowAsProps: true,
        customValidators: []
      }
    ],

    // react-refresh
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

    // jsx-a11y
    ...a11yOff, // 禁用所有 jsx-a11y 规则

    // tailwindcss
    'tailwindcss/classnames-order': 'error', // TailwindCSS 类名排序
    'tailwindcss/enforces-shorthand': 'error', // TailwindCSS 简写合并
    'tailwindcss/no-custom-classname': 'off' // TailwindCSS 中允许自定义类名
  }
}
