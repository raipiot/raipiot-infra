import { teamConfig } from '@raipiot-infra/config'

const author = teamConfig.name
const version = '0.0.1'

export const metadata = Object.freeze({
  'zh-CN': {
    name: 'raipiot',
    description: '',
    version,
    author,
    customContent: '由 raipiot 提供技术支持 - http://github.com/raipiot'
  },
  'en-US': {
    name: 'raipiot',
    description: '',
    version,
    author,
    customContent: 'Powered by raipiot - http://github.com/raipiot'
  }
})

export const i18n = Object.freeze({
  'zh-CN': {
    author: '作者：',
    version: '版本：'
  },
  'en-US': {
    author: 'Author: ',
    version: 'Version: '
  }
})
