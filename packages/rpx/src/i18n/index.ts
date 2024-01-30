import path from 'path'

import { CliConfig } from '../config'
import en_US from '../locales/en-US.json'
import zh_CN from '../locales/zh-CN.json'
import type { Lang, MessageSchema, RaipiotConfig, Translation } from '../types'

let config: RaipiotConfig | null = null

// TODO: 优化配置文件的读取方式
try {
  // eslint-disable-next-line import/no-dynamic-require, global-require, @typescript-eslint/no-var-requires
  config = require(path.resolve('raipiot.config.js')) as RaipiotConfig
} catch {
  config = null
}

const currentLang = config?.lang ?? CliConfig.defaultLang

const translations: Record<Lang, Translation> = {
  'en-US': {},
  'zh-CN': {}
}

/**
 * 加载所有语言翻译文件
 */
translations['en-US'] = en_US
translations['zh-CN'] = zh_CN

/**
 * 获取翻译
 */
const getTranslation = (translation: Translation, key: string): string => {
  const directValue = translation[key]
  if (typeof directValue === 'string') {
    return directValue
  }

  const parts = key.split('.')
  let current: string | Translation | undefined = translation

  parts.forEach((part) => {
    if (typeof current === 'object' && current !== null) {
      current = current[part]
    } else {
      current = undefined
    }
  })
  return typeof current === 'string' ? current : ''
}

/**
 * 国际化翻译
 */
export const t = (key: MessageSchema) => getTranslation(translations[currentLang], key)
