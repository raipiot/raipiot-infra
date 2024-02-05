import type { InlinePreset } from 'unimport'
import type { ImportsMap, PresetName } from 'unplugin-auto-import/types'

export const reactPresets: (ImportsMap | PresetName | InlinePreset)[] = [
  'react',
  'react-i18next',
  {
    from: 'react',
    imports: ['Suspense']
  },
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
    from: '@tanstack/react-router',
    imports: [
      'Link',
      'Outlet',
      'RouterProvider',
      'createRouter',
      'createFileRoute',
      'createLazyFileRoute',
      'createRootRouteWithContext',
      'notFound',
      'redirect',
      'useNavigate',
      'useRouter',
      'useLoaderData',
      'useMatch',
      'useParams',
      'useRouteContext',
      'useSearch',
      'LoaderContext',
      'NotFoundRoute',
      'getRouteApi'
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
    imports: ['TeamConfig', 'BrandConfig', 'StorageConfig']
  },
  {
    from: '@raipiot-infra/utils',
    imports: ['AuthUtils', 'BrowserUtils', 'DateUtils', 'LangUtils', 'ThemeUtils']
  }
]
