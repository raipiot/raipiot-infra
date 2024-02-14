# @raipiot-infra/bootstrap-animation

![npm](https://img.shields.io/npm/v/@raipiot-infra/bootstrap-animation?logo=vite&label=bootstrap-animation&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

`@raipiot-infra/bootstrap-animation` 用于在启动项目时，命令行打印品牌动画，支持 Vite 插件。

## 安装

```bash
pnpm add -D @raipiot-infra/bootstrap-animation
```

## 配置

### Vite

```ts
// vite.config.ts
import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'

export default defineConfig({
  plugins: [BootstrapAnimation()]
})
```

### Next.js

```js
// next.config.js
const { bootstrapLog } = require('@raipiot-infra/bootstrap-animation')

bootstrapLog()
```

### React Native

```js
// metro.config.js
const { bootstrapLog } = require('@raipiot-infra/bootstrap-animation')

bootstrapLog()
```

## 重写默认配置

```ts
// vite.config.ts
import { BootstrapAnimation } from '@raipiot-infra/bootstrap-animation'

export default defineConfig({
  plugins: [
    BootstrapAnimation({
      author: ''
    })
  ]
})
```
