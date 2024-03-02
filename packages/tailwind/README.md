# @raipiot-infra/tailwind

![npm](https://img.shields.io/npm/v/@raipiot-infra/tailwind?logo=tailwindcss&label=tailwind&registry_uri=http%3A%2F%2Fnpm-registry.raipiot.com%3A4873)

raipiot infra 通用 Tailwind CSS 配置。

## 安装

需要按照常规步骤安装 Tailwind CSS，然后再集成本包。

```bash
pnpm add D tailwindcss postcss autoprefixer @raipiot-infra/tailwind
npx tailwindcss init -p
```

## 配置

### 添加全局样式

在 `src/styles/tailwind.scss` 中添加以下内容：

```scss
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 引入预设配置

在 `tailwind.config.js` 中添加以下内容：

```js
module.exports = {
  presets: [require('@raipiot-infra/tailwind/preset')],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
}
```
