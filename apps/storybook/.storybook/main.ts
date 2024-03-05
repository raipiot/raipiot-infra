import type { StorybookConfig } from '@storybook/react-vite'
import { mergeConfig } from 'vite'
import { join, dirname } from 'path'

import { fileURLToPath, URL } from 'node:url'

function getAbsolutePath(value: string): any {
  return dirname(require.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('@storybook/addon-essentials'),
    getAbsolutePath('@storybook/addon-onboarding'),
    getAbsolutePath('@storybook/addon-interactions')
  ],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {}
  },
  docs: {
    autodocs: 'tag'
  },
  core: {
    builder: '@storybook/builder-vite'
  },
  typescript: {
    reactDocgen: 'react-docgen'
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          '@': fileURLToPath(new URL('../src', import.meta.url))
        },
        extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json']
      }
    })
  }
}
export default config
