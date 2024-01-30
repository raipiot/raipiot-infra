# @raipiot-infra/tsconfig

目前支持的配置有：

- `@raipiot-infra/tsconfig/base.json`：基础配置
- `@raipiot-infra/tsconfig/next.json`: Next.js 配置
- `@raipiot-infra/tsconfig/react.json`: React 配置
- `@raipiot-infra/tsconfig/react-lib.json`: React Library 配置
- `@raipiot-infra/tsconfig/vite.json`: Vite 配置

## 安装

```bash
pnpm add -D typescript @raipiot-infra/tsconfig
```

## 配置

### TypeScript 类库

根目录下 `tsconfig.json`，内容如下：

```json
{
  "extends": "@raipiot-infra/tsconfig/base.json",
  "include": ["src"]
}
```

### React + Vite

详细配置请参考 [raipiot-admin](https://github.com/raipiot/raipiot-admin)。
