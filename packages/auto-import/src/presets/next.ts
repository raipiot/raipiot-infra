import type { InlinePreset } from 'unimport'
import type { ImportsMap, PresetName } from 'unplugin-auto-import/types'

export const nextPresets: (ImportsMap | PresetName | InlinePreset)[] = [
  'react',
  {
    from: 'next/image',
    imports: [['default', 'NextImage']]
  },
  {
    from: 'next/link',
    imports: [['default', 'NextLink']]
  },
  {
    from: 'next/navigation',
    imports: ['useRouter', 'redirect']
  },
  {
    from: 'clsx',
    imports: [['default', 'clsx']]
  },
  {
    from: '@raipiot-infra/config',
    imports: ['TeamConfig', 'BrandConfig', 'StorageConfig']
  }
]
