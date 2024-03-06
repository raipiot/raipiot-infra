export const defaultFuzzySearchQuestion = {
  type: 'fuzzy-search',
  name: 'targetPath',
  itemType: 'directory',
  depthLimit: 10,
  excludePath: (nodePath: string) =>
    nodePath.includes('node_modules') || /\/\.[a-zA-Z0-9]/.test(nodePath)
}

export const validate = (input: string) => {
  if (/^[A-Za-z0-9]*$/.test(input)) {
    return true
  }
  return 'API name must start with a lowercase letter and only contain letters and numbers'
}

// 基于传入的变量名，生成大驼峰命名法
export const generateCamelCase = (input: string) => {
  const words = input.split(/[-\s]/)
  return words.map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase()).join('')
}

// 基于传入的变量名，生成小驼峰命名法
export const generatePascalCase = (input: string) => {
  const words = input.split(/[-\s]/)
  return (
    words[0].toLowerCase() +
    words
      .slice(1)
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join('')
  )
}

// 基于传入的变量名，生成下划线间隔的大写常量
export const generateConstantCase = (input: string) => {
  const words = input.split(/[-\s]/)
  return words.map((word) => word.toUpperCase()).join('_')
}
