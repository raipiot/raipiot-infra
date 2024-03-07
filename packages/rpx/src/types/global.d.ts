// 在 globalThis 中定义一个属性，然后在其他文件中使用它

import type { CodeTypeKey } from '../repo-tools'
import type { RaipiotConfig } from '.'

declare global {
  namespace globalThis {
    // eslint-disable-next-line vars-on-top, no-var
    var raipiotConfig: RaipiotConfig | null
    // eslint-disable-next-line vars-on-top, no-var
    var prefGenCodeType: CodeTypeKey | undefined
  }
}

export {}
