# raipiot-infra

raipiot infra 是我们的基础建设仓库，是基于 Turborepo、Changesets、pnpm Workspace 的 Monorepo。用于存放我们的基础建设的前端工程化配置、通用配置文件、插件、组件库、工具类库等。

![npm](https://img.shields.io/npm/v/@raipiot-infra/tsconfig?color=%23EEE&label=cspell)
![npm](https://img.shields.io/npm/v/@raipiot-infra/tsconfig?color=%23EEE&label=tsconfig)
![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?color=%23EEE&label=utils)

## Apps

该 Monorepo 仓库 [`apps`](apps) 目录下存放的是演练场项目，用于测试基础建设的包。

- [`next`](apps/next/): 基于 `Next.js` + `TypeScript`
- [`react`](apps/react/): 基于 `React` + `Vite` + `TypeScript`
- [`react-native`](apps/react-native/): 基于 `React Native` + `TypeScript`

## Packages

- [`cspell`](packages/cspell): 通用的 CSpell 配置
- [`prettier`](packages/prettier): 通用的 Prettier 配置
- [`eslint`](packages/eslint): 通用的 ESLint 配置
- [`commitlint`](packages/commitlint): 通用的 Commitlint 配置
- [`tsconfig`](packages/tsconfig): 通用的 tsconfig 配置

## 如何在其他项目中使用

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

在 `husky` 的 `pre-commit` 钩子中添加：

```sh
pnpm cspell:check
```

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

在 `husky` 的 `pre-commit` 钩子中添加：

```sh
pnpm eslint:check
```

### Commitlint

我们使用 `commitlint` 来进行提交信息的规范检查，每次提交代码时，都会自动检查提交信息是否符合规范。

```bash
pnpm add -D @commitlint/cli @commitlint/config-conventional commitizen cz-git @raipiot-infra/commitlint-config
```

项目根目录添加 `.commitlintrc.json` 文件，内容如下：

```json
{
  "extends": "@commitlint/config-conventional"
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

在 `husky` 的 `commit-msg` 钩子中添加：

```sh
npx --no -- commitlint --edit $1
```

通过 `git-cz` 命令来提交代码：

```bash
git add .
pnpm cz
```

### tsconfig

使用 `@raipiot-infra/tsconfig` 的预设，根目录下 `tsconfig.json`，内容如下：

```json
{
  "extends": "@raipiot-infra/tsconfig/base.json",
  "include": ["src"]
}
```

### TailwindCSS

```json
{}
```

## IDE 设置

### VSCode

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
