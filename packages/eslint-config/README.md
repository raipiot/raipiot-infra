# @raipiot-infra/eslint-config

![npm](https://img.shields.io/npm/v/@raipiot-infra/eslint-config?logo=eslint&label=eslint-config&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

## 安装

```bash
pnpm add -D eslint @raipiot-infra/eslint-config
```

## 配置

在根目录下添加 `.eslintrc.json` 文件，内容如下：

```json
{
  "extends": ["@raipiot-infra"]
}
```

注意：该包为 `@raipiot-infra/eslint-config-react` 的别名，根据 ESLint 的配置用于简写引用的包名，可将 `/eslint-config-react` 后缀省略。
