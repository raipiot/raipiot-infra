# raipiot-infra

raipiot infra 用于存放我们的基础建设的配置文件、插件、组件库、工具库等。

![npm](https://img.shields.io/npm/v/@raipiot-infra/tsconfig?color=%23EEE&label=tsconfig)
![npm](https://img.shields.io/npm/v/@raipiot-infra/utils?color=%23EEE&label=utils)

## Apps 和 Packages

- [`cspell`](packages/cspell): 通用的 CSpell 配置
- [`prettier`](packages/prettier): 通用的 Prettier 配置
- [`tsconfig`](packages/tsconfig): 通用的 tsconfig 配置

## 在项目中使用

### CSpell

从 VSCode 插件中搜索并安装插件 **Code Spell Check**。

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

### ESLint

```json
{}
```

### Prettier

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

### tsconfig

```json
{}
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
