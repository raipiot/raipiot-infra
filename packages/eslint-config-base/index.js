/** @type {Object} */
const a11yOff = Object.keys(require('eslint-plugin-jsx-a11y').rules).reduce((acc, rule) => {
  acc[`jsx-a11y/${rule}`] = 'off'
  return acc
}, {})

const fs = require('node:fs')
const { join, resolve } = require('node:path')

/** @type {string} */
const buildProject = () =>
  !fs.existsSync(join(process.cwd(), 'tsconfig.eslint.json'))
    ? resolve(process.cwd(), 'tsconfig.json')
    : resolve(process.cwd(), 'tsconfig.eslint.json')

const defaultIgnorePatterns = [
  'node_modules',
  'dist',
  'src-tauri',
  '@types/auto-imports.d.ts',
  'storybook-static'
]

const buildJsOverrides = () => ({
  files: ['*.{js,cjs,mjs,jsx}'],
  extends: 'plugin:@typescript-eslint/disable-type-checked',
  rules: {
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-require-imports': 'off'
  }
})

const buildDtsOverrides = () => ({
  files: ['*.d.ts'],
  rules: {
    'import/no-duplicates': 'off'
  }
})

const buildTsOverrides = () => ({
  files: ['*.{ts,tsx,cts,mts}'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: buildProject(),
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  rules: {
    'no-undef': 'off',
    'react/jsx-no-undef': 'off' // 由 TypeScript 静态检查
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: buildProject()
      }
    }
  }
})

const buildVueOverrides = () => ({
  files: ['*.vue'],
  rules: {
    'no-undef': 'off'
  }
})

const buildAstroOverrides = () => ({
  files: ['*.astro'],
  parser: 'astro-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    extraFileExtensions: ['.astro'],
    project: buildProject(),
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  globals: {
    Astro: 'readonly'
  },
  rules: {
    'react/no-unknown-property': 'off', // .astro 中无须校验未知属性
    'react/jsx-filename-extension': [1, { extensions: ['.astro'] }],
    'consistent-return': 'off' // TODO: 如何在顶层返回 Astro 组件
  },
  settings: {
    'import/resolver': {
      typescript: {
        project: buildProject()
      }
    }
  }
})

const buildCommonRules = () => ({
  quotes: ['error', 'single'], // 强制使用单引号
  semi: ['error', 'never'], // 禁止使用分号
  'no-unused-vars': 'off',
  'class-methods-use-this': 'off', // 允许类方法不使用 this
  'max-classes-per-file': 'off', // 允许一个文件中有多个类
  'no-param-reassign': [
    'warn',
    {
      props: true,
      ignorePropertyModificationsFor: [
        'target',
        'descriptor',
        'req',
        'request',
        'args',
        'draft',
        'acc',
        'props'
      ],
      ignorePropertyModificationsForRegex: ['^item', 'Item$']
    }
  ] // 允许修改函数参数，但是会有警告
})

/**
 * eslint-plugin-simple-import-sort
 * @type {Object}
 */
const buildSimpleImportSortRules = () => ({
  'simple-import-sort/imports': 'error', // import 排序
  'simple-import-sort/exports': 'error' // export 排序
})

/**
 * eslint-plugin-unused-imports
 * @type {Object}
 */
const buildUnusedImportsRules = () => ({
  'unused-imports/no-unused-imports': 'error',
  'unused-imports/no-unused-vars': [
    'warn',
    {
      vars: 'all',
      varsIgnorePattern: '^_',
      args: 'after-used',
      argsIgnorePattern: '^_'
    }
  ]
})

/**
 * eslint-plugin-import
 * @type {Object}
 */
const buildEslintPluginImportRules = () => ({
  'import/order': 'off', // 禁用 import 排序，使用 simple-import-sort
  'import/first': 'error', // import 必须放在文件顶部
  'import/newline-after-import': 'error', // import 之后必须空一行
  'import/no-unresolved': 'off', // 允许导入未解析的模块
  'import/no-absolute-path': 'off', // 允许导入绝对路径
  'import/no-duplicates': 'error', // 禁止重复导入
  'import/extensions': 'off', // 允许导入时带文件扩展名
  'import/no-extraneous-dependencies': 'off', // 允许 devDependencies，peerDependencies，不允许 optionalDependencies
  'import/no-mutable-exports': 'error', // 禁止导出 let, var 声明的变量
  'import/no-self-import': 'error', // 禁止自导入
  'import/prefer-default-export': 'off' // 仅导出一个变量时，不要求默认导出
})

/**
 * typescript-eslint
 * @type {Object}
 */
const buildTypescriptEslintRules = () => ({
  '@typescript-eslint/no-explicit-any': 'off', // 由 TS 静态检查
  '@typescript-eslint/comma-dangle': 'off', // 由 Prettier 处理
  '@typescript-eslint/consistent-type-imports': 'error', // 强制使用 import type
  '@typescript-eslint/triple-slash-reference': 'off', // 允许使用 /// <reference path="" />
  '@typescript-eslint/no-unused-vars': 'off', // 由 eslint-plugin-unused-imports 处理
  '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false }],
  '@typescript-eslint/no-throw-literal': 'off' // 允许 throw 字面量
})

/**
 * react
 * @type {Object}
 */
const buildReactRules = () => ({
  'react/destructuring-assignment': 'off', // 允许使用解构赋值
  'react/prop-types': 'off', // 不必校验 props
  'react/require-default-props': 'off', // 不必要求默认 props
  'react/react-in-jsx-scope': 'off', // React 17 后不需要引入 React
  'react/jsx-uses-react': 'off', // React 17 后不需要引入 React
  'react/jsx-props-no-spreading': 'off', // 允许使用 ... 扩展 props
  'react/jsx-filename-extension': ['warn', { extensions: ['jsx', '.tsx'] }], // JSX 文件使用 .jsx 或 .tsx 扩展名
  'react/jsx-no-useless-fragment': ['error', { allowExpressions: true }], // 允许使用 <></> 包裹表达式，如 <>{children}</>
  'react/no-array-index-key': 'off', // 允许使用数组索引作为 key
  'react/no-unstable-nested-components': ['error', { allowAsProps: true, customValidators: [] }]
})

/**
 * react-refresh
 * @type {Object}
 */
const buildReactRefreshRules = () => ({
  'react-refresh/only-export-components': ['warn', { allowConstantExport: true }]
})

/**
 * react-native
 */
const buildReactNativeRules = () => ({
  'global-require': 'off', // React Native 中图片引入使用的是 require
  'react-native/no-inline-styles': 'off' // 允许内联样式
})

/**
 * tailwindcss
 * @type {Object}
 */
const buildTailwindcssRules = () => ({
  'tailwindcss/classnames-order': 'error', // TailwindCSS 类名排序
  'tailwindcss/enforces-shorthand': 'error', // TailwindCSS 简写合并
  'tailwindcss/no-custom-classname': 'off' // TailwindCSS 中允许自定义类名
})

/**
 * vue
 * @type {Object}
 */
const buildVueRules = () => ({
  'vue/no-v-html': 'off', // 允许使用 v-html
  'vue/multi-word-component-names': 'off', // 允许单个单词的组件名，例如 index.vue
  'vue/component-tags-order': [
    'error',
    {
      order: ['script', 'template', 'style']
    }
  ] // 优先 script，其次 template，最后 style
})

/**
 * 构建 ESLint overrides
 * @param {OverridesConfig} config
 * @typedef {Object} OverridesConfig
 * @property {boolean} typescript
 * @property {boolean} vue
 * @property {boolean} astro
 */
const buildOverrides = (config) => {
  const { typescript, vue, astro } = config
  return [
    buildJsOverrides(),
    buildDtsOverrides(),
    ...(typescript ? [buildTsOverrides()] : []),
    ...(vue ? [buildVueOverrides()] : []),
    ...(astro ? [buildAstroOverrides()] : [])
  ]
}

/**
 * 构建 ESLint 规则
 * @param {RulesConfig} config
 * @typedef {Object} RulesConfig
 * @property {boolean} typescript
 * @property {boolean} react
 * @property {boolean} reactNative
 * @property {boolean} tailwindCSS
 * @property {boolean} vue
 */
const buildRules = (config) => {
  const { typescript, react, reactNative, tailwindCSS, vue } = config
  return {
    ...buildCommonRules(),
    ...buildUnusedImportsRules(),
    ...buildSimpleImportSortRules(),
    ...buildEslintPluginImportRules(),
    ...(typescript ? buildTypescriptEslintRules() : {}),
    ...(reactNative ? buildReactNativeRules() : {}),
    ...(react || reactNative
      ? { ...buildReactRules(), ...buildReactRefreshRules(), ...a11yOff }
      : {}),
    ...(tailwindCSS ? buildTailwindcssRules() : {}),
    ...(vue ? buildVueRules() : {})
  }
}

module.exports = {
  buildProject,
  defaultIgnorePatterns,
  buildOverrides,
  buildRules
}
