import '../src/styles/main.scss'

import type { Preview } from '@storybook/react'
import { addons } from '@storybook/preview-api'
import { themes } from '@storybook/theming'
import { DocsContainer } from '@storybook/addon-docs'

import { createElement } from 'react'
import { useDarkMode } from 'storybook-dark-mode'

import { ThemeProvider } from '@/components/ThemeProvider'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    darkMode: {
      current: 'light',
      classTarget: 'html',
      stylePreview: true,
      styleDoc: true
    },
    docs: {
      toc: true,
      container: (context: any) => {
        const isDark = useDarkMode()
        const props = {
          ...context,
          theme: isDark ? themes.dark : themes.light
        }
        return createElement(DocsContainer, props)
      }
    }
  },
  decorators: [(renderStory) => <ThemeProvider>{renderStory()}</ThemeProvider>]
}
export default preview
