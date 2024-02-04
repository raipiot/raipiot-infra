import { BrandConfig, TeamConfig } from '@raipiot-infra/config'

const version = '0.0.1'

const { teamName, githubUrl } = TeamConfig
const { companyName } = BrandConfig

export const metadata = Object.freeze({
  'zh-CN': {
    name: companyName,
    description: '',
    version,
    author: teamName,
    customContent: `由 ${companyName} 提供技术支持 - ${githubUrl}`
  },
  'en-US': {
    name: companyName,
    description: '',
    version,
    author: teamName,
    customContent: `Powered by ${companyName} - ${githubUrl}`
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
