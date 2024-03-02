# @raipiot-infra/eslint-config-astro

![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config-astro?logo=eslint&label=eslint-config-astro&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

raipiot infra 通用 ESLint 配置，适用于 Astro 项目。

我们使用 `ESLint` 来进行代码风格校验。

从 VSCode 插件中搜索并安装插件 **ESLint**。

## 安装

```bash
pnpm add -D eslint @raipiot-infra/eslint-config-astro
```

## 配置

在根目录下添加 `.eslintrc.json` 文件，内容如下：

```json
{
  "extends": ["@raipiot-infra/eslint-config-astro"]
}
```
