import type { InlinePreset } from 'unimport'
import type { ImportsMap, PresetName } from 'unplugin-auto-import/types'

export const reactPresets: (ImportsMap | PresetName | InlinePreset)[] = [
  'react',
  'react-i18next',
  {
    from: '@tanstack/react-query',
    imports: [
      'QueryClient',
      'QueryClientProvider',
      'useQueryClient',
      'useQuery',
      'useQueries',
      'useInfiniteQuery',
      'useMutation',
      'keepPreviousData',
      'focusManager',
      'onlineManager'
    ]
  },
  {
    from: 'clsx',
    imports: [['default', 'clsx']]
  },
  {
    from: 'use-immer',
    imports: ['useImmer']
  },
  {
    from: '@raipiot-infra/config',
    imports: ['TeamConfig', 'BrandConfig']
  },
  {
    from: '@raipiot-infra/utils',
    imports: ['AuthUtils', 'BrowserUtils', 'LangUtils', 'ThemeUtils', 'TimeUtils']
  }
]
