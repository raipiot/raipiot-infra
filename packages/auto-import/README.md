# @raipiot-infra/auto-import

![npm](https://img.shields.io/npm/v/@raipiot-infra/auto-import?logo=vite&label=auto-import&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

在 `Vite` 项目中使用 `@raipiot-infra/auto-import` 预设，可以帮助我们自动引入第三方库。

## 安装

```bash
pnpm add -D unplugin-auto-import @raipiot-infra/auto-import
```

## 配置

### Vite

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import { reactPresets } from '@raipiot-infra/auto-import'

export default defineConfig({
  plugins: [
    AutoImport({
      dts: '@types/auto-imports.d.ts',
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.md$/ // .md
      ],
      imports: reactPresets
    })
  ]
})
```

### Next.js

```js
// next.config.js
const AutoImport = require('unplugin-auto-import/next').default
const { nextPresets } = require('@raipiot-infra/auto-import')

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(
      AutoImport({
        imports: [...nextPresets],
        dts: '@types/auto-imports.d.ts'
      })
    )
    return config
  }
}

module.exports = nextConfig
```
