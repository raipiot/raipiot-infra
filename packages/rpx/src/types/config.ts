import type { Lang } from './i18n'

export interface RaipiotConfig {
  lang: Lang
  org: string
  repo: string
  genCode: GenCode
}

interface GenCode {
  rootPath?: string
  paths: GenCodePaths
}

interface GenCodePaths {
  route: string
  api: string
}
