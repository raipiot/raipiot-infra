# @raipiot-infra/prettier

![npm](https://img.shields.io/npm/v/@raipiot-infra/prettier?logo=prettier&label=prettier&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

raipiot infra 通用 Prettier 配置。

我们使用 `Prettier` 来进行代码格式化。

从 VSCode 插件中搜索并安装插件 **Prettier**。

## 安装

```bash
pnpm add -D prettier @raipiot-infra/prettier
```

## 配置

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
