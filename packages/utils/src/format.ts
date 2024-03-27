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

  /**
   * 对单层存在数组的数据进行处理，将数组转化为字符串
   * @param obj api 通信的简单对象，只有一层结构
   * @returns
   */
  static arrayFieldToString(data: Record<string, any>) {
    const copyData = structuredClone(data)
    Object.keys(copyData).forEach((key) => {
      if (Array.isArray(copyData[key])) {
        copyData[key] = copyData[key].join(',')
      }
    })
    return copyData
  }

  /**
   * 将数据对象指定的属性的值转化为数组，逆操作 simpleArrayToString
   * @param obj api 传输对象，已经将数组转换为字符串的对象
   * @param keys 指定的 key
   * @param options 配置分隔符、格式化函数、过滤函数
   */
  static stringToArrayFieldByKeys(
    obj: Record<string, any>,
    keys: string[],
    options?: {
      separator?: string
      formatter?: (value: string) => any
      filter?: (value: string, index?: number) => boolean
    }
  ) {
    const { separator, formatter, filter } = {
      separator: ',',
      formatter: (value: any) => value,
      filter: (_value: any, _index: number) => true,
      ...options
    }
    const cloneObject = structuredClone(obj)
    Object.keys(cloneObject).forEach((key) => {
      if (typeof cloneObject[key] === 'string' && keys.some((i) => i === key)) {
        cloneObject[key] = cloneObject[key].split(separator).filter(filter).map(formatter)
      }
    })
    return cloneObject
  }
}
