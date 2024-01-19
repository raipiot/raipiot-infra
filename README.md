# raipiot-infra

raipiot infra 用于存放我们的基础建设的配置文件。

例如 ESLint、Prettier、TypeScript、TailwindCSS 的配置等。

## 在项目中使用

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

### TypeScript

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
  }
}
```
