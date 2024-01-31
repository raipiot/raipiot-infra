import type { Resolver } from 'unplugin-auto-import/types'

import { getComponentsMap } from '@/utils'

import { raipiotAntdBuiltInComponents } from './presets'

const PACKAGE_NAME = '@raipiot-infra/antd'

export const antdResolver = (): Resolver => {
  const componentsMap = getComponentsMap(raipiotAntdBuiltInComponents, 'Rp')
  return {
    type: 'component',
    resolve: (originName: string) => {
      const name = componentsMap.get(originName)
      if (name) {
        return {
          from: PACKAGE_NAME,
          name,
          as: originName
        }
      }
      return undefined
    }
  }
}
