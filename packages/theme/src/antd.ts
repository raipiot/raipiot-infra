import type { ThemeConfig } from 'antd'
import { theme } from 'antd'
import type { AliasToken } from 'antd/es/theme/interface'

// 消息配置
export const messageConfig = {
  maxCount: 3,
  duration: 1.5
}

// 主题：基础配置
export const themeBaseToken: Partial<AliasToken> = {
  fontFamily:
    'Nunito, Noto Sans SC, Noto Color Emoji, system-ui, -apple-system, Roboto, Helvetica Neue, Arial, sans-serif',
  screenXS: 0,
  screenSM: 640,
  screenMD: 768,
  screenLG: 1024,
  screenXL: 1280,
  screenXXL: 1536,
  screenXSMin: 0,
  screenSMMin: 640,
  screenMDMin: 768,
  screenLGMin: 1024,
  screenXLMin: 1280,
  screenXXLMin: 1536
}

// 主题：组件配置
export const themeBaseComponents: ThemeConfig['components'] = {
  Card: {
    paddingLG: 16
  }
}

// 亮色主题预设
export const lightThemeConfigPresets: ThemeConfig = {
  algorithm: theme.defaultAlgorithm,
  token: {
    ...themeBaseToken,
    colorPrimary: '#1875ff',
    colorInfo: '#1875ff',
    colorBgBase: '#ffffff',
    colorTextBase: '#000000'
  },
  components: {
    ...themeBaseComponents,
    Layout: {
      bodyBg: '#ffffff',
      footerBg: '#ffffff',
      headerBg: '#ffffff',
      siderBg: '#ffffff'
    }
  }
}

// 暗色主题预设
export const darkThemeConfigPresets: ThemeConfig = {
  algorithm: theme.darkAlgorithm,
  token: {
    ...themeBaseToken,
    colorPrimary: '#1875ff',
    colorPrimaryBg: '#333333',
    colorInfo: '#1875ff',
    colorBgBase: '#111111',
    colorTextBase: '#ffffff'
  },
  components: {
    ...themeBaseComponents,
    Layout: {
      bodyBg: '36393f',
      footerBg: '#36393f',
      headerBg: '#36393f',
      siderBg: '#36393f'
    }
  }
}
