import type { CodeTypeKey } from '../src/repo-tools'
import type { RaipiotConfig } from '../src/types'

declare global {
  namespace globalThis {
    // eslint-disable-next-line vars-on-top, no-var
    var raipiotConfig: RaipiotConfig | null
    // eslint-disable-next-line vars-on-top, no-var
    var prefGenCodeType: CodeTypeKey | undefined
  }
}

declare module 'figlet-promised'

export {}
