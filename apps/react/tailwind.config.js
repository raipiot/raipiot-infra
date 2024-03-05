import { addDynamicIconSelectors } from '@iconify/tailwind'
import groupModifierPlugin from 'tailwindcss-group-modifier-plugin'

/** @type {import('tailwindcss').Config} */
export default {
  // eslint-disable-next-line global-require
  presets: [require('@raipiot-infra/tailwind')],
  content: {
    files: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    transform: (code) => code
  },
  theme: {
    extend: {}
  },
  plugins: [
    addDynamicIconSelectors({
      prefix: 'i'
    }),
    addDynamicIconSelectors({
      prefix: 'i-hover',
      overrideOnly: true
    }),
    groupModifierPlugin()
  ]
}
