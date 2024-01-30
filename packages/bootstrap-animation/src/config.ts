import { BrandConfig, TeamConfig } from '@raipiot-infra/config'

const version = '0.0.1'

const { name: author, githubUrl } = TeamConfig
const { name: brandName } = BrandConfig

export const metadata = Object.freeze({
  'zh-CN': {
    name: brandName,
    description: '',
    version,
    author,
    customContent: `由 ${brandName} 提供技术支持 - ${githubUrl}`
  },
  'en-US': {
    name: brandName,
    description: '',
    version,
    author,
    customContent: `Powered by ${brandName} - ${githubUrl}`
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
