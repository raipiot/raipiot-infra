# raipiot-infra

raipiot infra 是我们的基础建设仓库，是基于 [`Turborepo`](https://turbo.build/repo)、[`Changesets`](https://github.com/changesets/changesets)、[`pnpm Workspace`](https://pnpm.io/workspaces) 的 Monorepo。用于存放我们的基础建设的**前端工程化配置**、**通用配置文件**、**插件**、**组件库**、**工具类库**等。

![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?logo=react&label=antd&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/auto-import?logo=vite&label=auto-import&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/axios?logo=axios&label=axios&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/bootstrap-animation?logo=vite&label=bootstrap-animation&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/commitlint-config?logo=commitlint&label=commitlint-config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/config?logo=npm&label=config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/cspell?logo=npm&label=cspell&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/enums?logo=typescript&label=enums&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config?logo=eslint&label=eslint-config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-base?logo=eslint&label=eslint-config-base&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-next?logo=eslint&label=eslint-config-next&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-react?logo=eslint&label=eslint-config-react&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-react-native?logo=eslint&label=eslint-config-react-native&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-ts?logo=eslint&label=eslint-config-ts&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-vue?logo=eslint&label=eslint-config-vue&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/hooks?logo=react&label=hooks&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/prettier?logo=prettier&label=prettier&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tailwind?logo=tailwindcss&label=tailwind&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tsconfig?logo=typescript&label=tsconfig&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)
![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?logo=npm&label=utils&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

## Apps

该 Monorepo 仓库 [`apps`](apps) 目录下存放的是演练场项目（Playground），用于测试基础建设的包。

- [`next`](apps/next/): 基于 `Next.js` + `TypeScript`
- [`react`](apps/react/): 基于 `React` + `Vite` + `TypeScript`
- [`react-native`](apps/react-native/): 基于 `React Native` + `TypeScript`

## Packages

- [ ] [`antd`](packages/antd): 基于 [`antd`](https://ant.design/) 封装的业务组件库，[访问地址](http://antd.raipiot.com)
- [ ] [`auto-import`](packages/auto-import): [`unplugin-auto-import`](https://github.com/unplugin/unplugin-auto-import) 的预设配置，搭配 Vite 使用
- [ ] [`axios`](packages/axios): 基于 [`axios`](https://axios-http.com/) 封装的网络请求库
- [ ] [`bootstrap-animation`](packages/bootstrap-animation): 启动项目时命令行打印的品牌动画、支持 Vite 插件
- [x] [`commitlint-config`](packages/commitlint-config): 通用的 Commitlint 配置，用于检查提交信息是否符合规范、辅助生成提交信息
- [ ] [`config`](packages/config): 通用的配置文件，包含一些与公司、品牌、团队相关的信息
- [x] [`cspell`](packages/cspell): 通用的 CSpell 配置，用于检查英文拼写
- [ ] [`enums`](packages/enums): 通用的枚举，用于 TypeScript 项目
- [x] [`eslint-config`](packages/eslint-config): 通用的 ESLint 配置，该包默认使用 [`eslint-config-react`](package/eslint-config-react)
- [x] [`eslint-config-base`](packages/eslint-config-base): ESLint 的配置预设，用于构建 ESLint 配置文件
- [x] [`eslint-config-next`](packages/eslint-config-next): ESLint 的配置预设，用于 Next.js 项目
- [x] [`eslint-config-react`](packages/eslint-config-react): ESLint 的配置预设，用于 React 项目
- [x] [`eslint-config-react-native`](packages/eslint-config-react-native): ESLint 的配置预设，用于 React Native 项目
- [x] [`eslint-config-ts`](packages/eslint-config-ts): ESLint 的配置预设，用于 TypeScript 项目
- [x] [`eslint-config-vue`](packages/eslint-config-vue): ESLint 的配置预设，用于 Vue 项目
- [ ] [`hooks`](packages/hooks): 通用的 React Hooks，用于 React 或 React Native 项目
- [x] [`prettier`](packages/prettier): 通用的 Prettier 配置，用于代码格式化
- [ ] [`tailwind`](packages/tailwind)：通用的 TailwindCSS 配置
- [ ] [`tsconfig`](packages/tsconfig): 通用的 tsconfig 配置，用于 TypeScript
- [ ] [`utils`](packages/utils): 通用的工具类库

## 如何在其他项目中使用

### husky

```bash
pnpm add -D husky
pnpm i
npx husky init
echo "npx lint-staged" > .husky/pre-commit
```

### lint-staged

```bash
pnpm add -D lint-staged
```

在根目录下添加 `.lintstagedrc.json` 文件，内容如下：

```json
{
  "**/*.{js,ts,jsx,tsx}": ["eslint --fix", "prettier --write"],
  "**/*.{md,html,css,scss}": ["prettier --write"]
}
```

### editorconfig

在根目录下添加 `.editorconfig` 文件，内容如下：

```text
root = true

[*]
charset = utf-8
end_of_line = lf
indent_style = space
indent_size = 2
insert_final_newline = true
trim_trailing_whitespace = true
quote_type = single

[*.md]
trim_trailing_whitespace = false
```

### CSpell

我们使用 `CSpell` 来进行英文拼写检查，每次提交代码时，都会自动检查英文拼写。

从 VSCode 插件中搜索并安装插件 **Code Spell Check**。

安装依赖：

```bash
pnpm add -D cspell @raipiot-infra/cspell
```

在项目根目录添加 `.cspell.json` 文件，引入 `@raipiot-infra/cspell` 配置文件，内容如下：

```json
{
  "$schema": "https://raw.githubusercontent.com/streetsidesoftware/cspell/main/cspell.schema.json",
  "version": "0.2",
  "language": "en",
  "dictionaries": ["custom-words"],
  "dictionaryDefinitions": [
    {
      "name": "custom-words",
      "path": ".cspell.txt",
      "addWords": true
    }
  ],
  "import": ["@raipiot-infra/cspell"]
}
```

在 `package.json` 中添加 `cspell` 脚本：

```json
{
  "scripts": {
    "cspell:check": "cspell --no-progress --show-suggestion --show-context --cache **"
  }
}
```

在 `husky` 的 `pre-commit` 钩子中添加脚本：

```bash
echo "pnpm cspell:check" >> .husky/pre-commit
```

---

### Prettier

我们使用 `Prettier` 来进行代码格式化，每次提交代码时，都会自动格式化代码。

安装依赖：

```bash
pnpm add -D prettier @raipiot-infra/prettier
```

在 `.prettierrc.json` 中添加字符串：

```json
"@raipiot-infra/prettier"
```

或者，在 `package.json` 中添加：

```json
{
  "prettier": "@raipiot-infra/prettier"
}
```

---

### ESLint

我们使用 `ESLint` 来进行代码风格检查，每次提交代码时，都会自动检查代码风格、规范。

从 VSCode 插件中搜索并安装插件 **ESLint**。

安装依赖：

```bash
pnpm add -D eslint @raipiot-infra/eslint-config
```

在根目录下添加 `.eslintrc.json` 文件，内容如下：

```json
{
  "extends": "@raipiot-infra"
}
```

在 `package.json` 中添加 `eslint` 脚本：

```json
{
  "scripts": {
    "eslint:check": "eslint . --color",
    "eslint:fix": "eslint . --color --fix"
  }
}
```

其他 ESLint 配置详见对应 `README.md`：

- [`eslint-config-next`](packages/eslint-config-next/README.md)
- [`eslint-config-react`](packages/eslint-config-react/README.md)
- [`eslint-config-react-native`](packages/eslint-config-react-native/README.md)
- [`eslint-config-ts`](packages/eslint-config-ts/README.md)
- [`eslint-config-vue`](packages/eslint-config-vue/README.md)

在 `husky` 的 `pre-commit` 钩子中添加：

```sh
pnpm eslint:check
```

---

### Commitlint

我们使用 `commitlint` 来进行提交信息的规范检查，每次提交代码时，都会自动检查提交信息是否符合规范。

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional commitizen cz-git @raipiot-infra/commitlint-config
```

在根目录下添加 `.commitlintrc.json` 文件，内容如下：

```json
{
  "extends": ["@raipiot-infra/commitlint-config"]
}
```

在 `package.json` 中添加：

```json
{
  "scripts": {
    "cz": "git-cz"
  },
  "config": {
    "commitizen": {
      "path": "node_modules/cz-git"
    }
  }
}
```

在 `husky` 的 `commit-msg` 钩子中添加脚本：

```bash
echo "npx --no -- commitlint --edit \"$1\"" > .husky/commit-msg
```

通过 `git-cz` 命令来提交代码：

```bash
git add .
pnpm cz
```

---

### tsconfig

使用 `@raipiot-infra/tsconfig` 的预设，根目录下 `tsconfig.json`，内容如下：

```json
{
  "extends": "@raipiot-infra/tsconfig/base.json",
  "include": ["src"]
}
```

---

### TailwindCSS

```json
{}
```

### auto-import

在 `Vite` 项目中使用 `@raipiot-infra/auto-import` 预设，可以帮助我们自动引入第三方库。

在 `vite.config.ts` 中添加：

```ts
{
}
```

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
