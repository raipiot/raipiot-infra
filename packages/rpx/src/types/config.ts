import type { Lang } from './i18n'

export interface RaipiotConfig {
  lang: Lang
  org: string
  repo: string
}

export enum generateCodeEnum {
  api = 'api',
  feature = 'feature',
  component = 'component',
  storybook = 'storybook'
}
