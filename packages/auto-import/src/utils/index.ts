// 获取添加前缀后的组件名映射
export const getComponentsMap = (
  components: string[],
  prefix?: string,
  nameProcessor?: (name: string) => string
): Map<string, string> =>
  components.reduce(
    (map, name) =>
      map.set(
        `${prefix ?? ''}${typeof nameProcessor === 'function' ? nameProcessor(name) : name}`,
        name
      ),
    new Map()
  )
