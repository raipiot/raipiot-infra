export class FormatUtils {
  /**
   * 转化为数据库存储的 0 或 1 布尔类型
   * @param value
   * @returns number
   * @example
   * FormatUtils.toDbNum(true) => 1
   * FormatUtils.toDbNum(false) => 0
   * FormatUtils.toDbNum("1") => 1
   * FormatUtils.toDbNum("0") => 0
   * FormatUtils.toDbNum(1) => 1
   * FormatUtils.toDbNum(0) => 0
   * FormatUtils.toDbNum("true") => 1
   * FormatUtils.toDbNum("false") => 0
   */
  static toDbNum(value: unknown): number {
    if (typeof value === 'number') {
      return value === 1 ? 1 : 0
    }
    if (typeof value === 'string') {
      return value === '1' || value === 'true' ? 1 : 0
    }
    if (typeof value === 'boolean') {
      return value ? 1 : 0
    }
    return 0
  }

  static tree2Breadcrumb<T extends { value: string; title: string; children: T[] }>(
    tree: T[],
    value: string
  ) {
    const breadcrumb: string[] = []

    const find = (_tree: T[], _value: string) => {
      for (let i = 0; i < _tree.length; i += 1) {
        const item = _tree[i]

        if (item.value?.toString() === _value?.toString()) {
          breadcrumb.push(item.title)
          return true
        }
        if (item.children && item.children.length) {
          if (find(item.children, _value)) {
            breadcrumb.push(item.title)
            return true
          }
        }
      }
      return false
    }
    find(tree, value?.toString())

    const result = breadcrumb.reverse().map((i) => ({
      title: i
    }))
    return result
  }

  static translateSimpleObjectWithArray<T extends Record<string, any>>(obj: T) {
    const newObject = structuredClone(obj)
    Object.entries(obj).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        Object.setPrototypeOf(newObject[key], Object.getPrototypeOf(value).join(','))
      }
    })
    return newObject
  }
}
