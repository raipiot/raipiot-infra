import { RAxios } from '@raipiot-infra/axios'

const instance = new RAxios(
  {
    baseURL: 'https://api.iconify.design'
  },
  {
    onFulfilled: (r) => r.data
  }
)

type IconCollectionsResponse = {
  [key: string]: {
    name: string
    total: number
    category: string
    samples: string[]
  }
}

type IconSearchResponse = {
  collections: IconCollectionsResponse
  icons: string[]
  total: number
}

export const iconsApi = {
  /**
   * 获取图标分类，默认获取所有图标分类
   * @param params 图标分类前缀，例如 mdi, mdi- 后者代表 mdi-light, mdi-dark 等
   * @returns
   */
  getIconCollections: (params?: { prefixes: string }) =>
    instance.get<IconCollectionsResponse>('/collections', { params }),

  /**
   *
   * @param params limit default is 64, max is 999
   * @returns
   */
  queryIcons: (params: { query: string; limit?: number }) =>
    instance.get<IconSearchResponse>('/search', { params })
}
