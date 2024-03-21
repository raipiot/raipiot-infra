import { px2remTransformer, StyleProvider } from '@ant-design/cssinjs'
import { HappyProvider } from '@ant-design/happy-work-theme'
import { getDefaultLocale } from '@raipiot-infra/antd'
import {
  darkThemeConfigPresets,
  lightThemeConfigPresets,
  messageConfig
} from '@raipiot-infra/theme'
import { Theme, ThemeUtils } from '@raipiot-infra/utils'
import { addons } from '@storybook/preview-api'
import { App, ConfigProvider } from 'antd'
import type { PropsWithChildren } from 'react'
import { useEffect } from 'react'
import { DARK_MODE_EVENT_NAME, useDarkMode } from 'storybook-dark-mode'

const px2rem = px2remTransformer({
  rootValue: 16,
  mediaQuery: true
})

export function ThemeProvider(props: PropsWithChildren) {
  const channel = addons.getChannel()

  useEffect(() => {
    ThemeUtils.changeTheme(ThemeUtils.getDefaultTheme())
    channel.on(DARK_MODE_EVENT_NAME, (e) => {
      ThemeUtils.changeTheme(e ? Theme.DARK : Theme.LIGHT)
    })
    return () =>
      channel.off(DARK_MODE_EVENT_NAME, (e) => {
        ThemeUtils.changeTheme(e ? Theme.DARK : Theme.LIGHT)
      })
  }, [channel])

  return (
    <ConfigProvider
      theme={{
        ...(useDarkMode() ? darkThemeConfigPresets : lightThemeConfigPresets)
      }}
      locale={getDefaultLocale()}
    >
      <StyleProvider
        hashPriority="high"
        transformers={[px2rem]}
      >
        <App message={messageConfig}>
          <HappyProvider disabled={false}>{props.children}</HappyProvider>
        </App>
      </StyleProvider>
    </ConfigProvider>
  )
}
