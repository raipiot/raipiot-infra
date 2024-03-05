/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line global-require
  presets: [require('@raipiot-infra/tailwind')], // TODO: storybook 似乎没有正确加载 tailwind 预设
  darkMode: ['class', '[data-theme="dark"]'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@raipiot-infra/antd/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
