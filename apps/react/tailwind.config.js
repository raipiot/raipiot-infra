/** @type {import('tailwindcss').Config} */

import { addDynamicIconSelectors } from '@iconify/tailwind'
import groupModifierPlugin from 'tailwindcss-group-modifier-plugin'

export default {
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
