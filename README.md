# raipiot-infra

raipiot infra 是我们的基础建设仓库，是基于 [`Turborepo`](https://turbo.build/repo)、[`Changesets`](https://github.com/changesets/changesets)、[`pnpm Workspace`](https://pnpm.io/workspaces) 的 Monorepo。用于存放我们的基础建设的**前端工程化配置**、**通用配置文件**、**插件**、**组件库**、**工具类库**等。

![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?logo=react&label=antd&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/auto-import?logo=vite&label=auto-import&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/axios?logo=axios&label=axios&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/bootstrap-animation?logo=vite&label=bootstrap-animation&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/commitlint?logo=commitlint&label=commitlint&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/config?logo=npm&label=config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/cspell?logo=npm&label=cspell&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/enums?logo=typescript&label=enums&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config?logo=eslint&label=eslint-config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-astro?logo=eslint&label=eslint-config-astro&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-base?logo=eslint&label=eslint-config-base&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-next?logo=eslint&label=eslint-config-next&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-react?logo=eslint&label=eslint-config-react&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-react-native?logo=eslint&label=eslint-config-react-native&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-ts?logo=eslint&label=eslint-config-ts&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-vue?logo=eslint&label=eslint-config-vue&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/hooks?logo=react&label=hooks&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/prettier?logo=prettier&label=prettier&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/rpx?logo=npm&label=rpx&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tailwind?logo=tailwindcss&label=tailwind&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tanstack-query?logo=npm&label=tanstack-query&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/theme?logo=npm&label=theme&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tsconfig?logo=typescript&label=tsconfig&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?logo=npm&label=utils&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

## Apps

该 Monorepo 仓库 [`apps`](apps) 目录下存放的是演练场项目（Playground），用于测试基础建设的包。

- [`next`](apps/next/): 基于 `Next.js` + `TypeScript`
- [`react`](apps/react/): 基于 `React` + `Vite` + `TypeScript`
- [`react-native`](apps/react-native/): 基于 `React Native` + `TypeScript`

## Packages

- [x] [`antd`](packages/antd): 基于 [`antd`](https://ant.design/) 封装的业务组件库，[访问地址](http://antd.raipiot.com)
- [x] [`auto-import`](packages/auto-import): [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) 的预设配置，搭配 Vite 使用
- [ ] [`axios`](packages/axios): 基于 [`axios`](https://axios-http.com/) 封装的网络请求库
- [x] [`bootstrap-animation`](packages/bootstrap-animation): 启动项目时命令行打印的品牌动画、支持 Vite 插件
- [x] [`commitlint`](packages/commitlint): 通用的 Commitlint 配置，用于检查提交信息是否符合规范、辅助生成提交信息
- [x] [`config`](packages/config): 通用的配置文件，包含一些与公司、品牌、团队相关的信息
- [x] [`cspell`](packages/cspell): 通用的 CSpell 配置，用于检查英文拼写
- [x] [`enums`](packages/enums): 通用的枚举，用于 TypeScript 项目
- [x] [`eslint-config`](packages/eslint-config): 通用的 ESLint 配置，该包默认使用 [`eslint-config-react`](package/eslint-config-react)
- [x] [`eslint-config-astro`](packages/eslint-config-astro): ESLint 的配置预设，用于 Astro 项目
- [x] [`eslint-config-base`](packages/eslint-config-base): ESLint 的配置预设，用于构建 ESLint 配置文件
- [x] [`eslint-config-next`](packages/eslint-config-next): ESLint 的配置预设，用于 Next.js 项目
- [x] [`eslint-config-react`](packages/eslint-config-react): ESLint 的配置预设，用于 React 项目
- [x] [`eslint-config-react-native`](packages/eslint-config-react-native): ESLint 的配置预设，用于 React Native 项目
- [x] [`eslint-config-ts`](packages/eslint-config-ts): ESLint 的配置预设，用于 TypeScript 项目
- [x] [`eslint-config-vue`](packages/eslint-config-vue): ESLint 的配置预设，用于 Vue 项目
- [ ] [`hooks`](packages/hooks): 通用的 React Hooks，用于 React 或 React Native 项目
- [x] [`prettier`](packages/prettier): 通用的 Prettier 配置，用于代码格式化
- [x] [`rpx`](packages/rpx): 一个命令行工具，用于管理 raipiot 项目仓库
- [x] [`tailwind`](packages/tailwind)：通用的 TailwindCSS 配置
- [x] [`tanstack-query`](packages/tanstack-query): 通用的 Tanstack Query 配置信息
- [x] [`theme`](packages/theme): 通用的主题配置
- [x] [`tsconfig`](packages/tsconfig): 通用的 tsconfig 配置，用于 TypeScript
- [x] [`utils`](packages/utils): 通用的工具类库

## IDE 设置

### VSCode

根目录下添加 `.vscode/settings.json` 文件，内容如下：

```json
{
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "never",
    "source.fixAll.eslint": "explicit",
    "source.fixAll.stylelint": "never",
    "source.fixAll.sortJSON": "never",
    "source.organizeImports": "never"
  },
  "[javascript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[javascriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescript]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[css]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[scss]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[less]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[json]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[jsonc]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[yaml]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## License

[MIT](/LICENSE) License &copy; 2024 raipiot Front-end Core Team
