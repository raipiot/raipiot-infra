/** @type {import('tailwindcss').Config} */
module.exports = {
  // eslint-disable-next-line global-require
  presets: [require('@raipiot-infra/tailwind')],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@raipiot-infra/antd/dist/**/*.{js,ts,jsx,tsx,mdx}'
  ]
}
