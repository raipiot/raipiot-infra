// 获取添加前缀后的组件名映射
export const getComponentsMap = (
  components: string[],
  nameProcessor?: (name: string) => string,
  prefix?: string
): Map<string, string> =>
  components.reduce(
    (map, name) => map.set(`${prefix ?? ''}${nameProcessor? nameProcessor(name)}`, name),
    new Map()
  )
