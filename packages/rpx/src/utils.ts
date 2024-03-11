import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import inquirer from 'inquirer'
import { red } from 'kolorist'

import type { CodeTypeKey } from './repo-tools'
import type { RaipiotConfig } from './types'

// 仅支持 raipiot.config.js 文件
export const getRaipiotConfig = async (): Promise<RaipiotConfig | null> => {
  try {
    const config: RaipiotConfig = (await import(path.join(process.cwd(), 'raipiot.config.js')))
      .default
    return config ?? null
  } catch {
    return null
  }
}

// 向上获取 raipiot.config.js 文件所在的目录作为根目录
// eslint-disable-next-line consistent-return
export const getRaipiotConfigRootPath = async (): Promise<string> => {
  try {
    if (process.cwd() === '/') {
      const { rootPath } = await inquirer.prompt([
        {
          type: 'text',
          name: 'rootPath',
          message: 'Please input the root path of project:'
        }
      ])
      if (!fs.existsSync(rootPath)) {
        throw new Error('The root path is not exist')
      }
      return rootPath
    }
    if (fs.existsSync('raipiot.config.js')) {
      return process.cwd()
    }
    process.chdir('..')
    return await getRaipiotConfigRootPath()
  } catch (error) {
    console.log(red('Error: raipiot.config.js not found'))
    process.exit(1)
  }
}

// 向上解析 raipiot.config.js 文件，递归查找，直到找到根目录
export async function recursionFindRaipiotConfig() {
  try {
    if (process.cwd() === '/') {
      return null
    }
    if (fs.existsSync('raipiot.config.js')) {
      const config = (await getRaipiotConfig())!
      return { rootPath: process.cwd(), config }
    }
    process.chdir('..')
    return await recursionFindRaipiotConfig()
  } catch (error) {
    return null
  }
}

// 复制 API 代码到指定目录，并且进行替换
export const transferTemplateAndGenerateResult = async <
  T extends {
    [key: string]: string
  }
>(
  type: CodeTypeKey,
  targetPath: string,
  slot: T
) => {
  // 创建文件夹
  fs.mkdirSync(targetPath, { recursive: true })
  const dirname = getDirname()
  // 加载模板，修改模板，写入文件
  // 带空格的类型需要转换为 - 分割的字符串作为路径
  const templatePath = path.join(dirname, 'templates', type.toLowerCase().replace(/[\s_]/g, '-'))
  const templates = fs
    .readdirSync(templatePath, {
      withFileTypes: true,
      recursive: true
    })
    .filter((i) => i.isFile())

  templates.forEach((template) => {
    const templateFilePath = path.join(template.path, template.name)
    let content = fs.readFileSync(templateFilePath, 'utf-8')
    Object.keys(slot).forEach((key) => {
      const value = slot[key as keyof typeof slot] as string
      content = content.replace(new RegExp(`\\#\\{${key}\\}`, 'g'), value)
    })
    const targetResultPath = path.join(targetPath, template.path.replace(templatePath, ''))

    // Hook 需要不需要
    if (type !== 'HOOK' && !fs.existsSync(targetResultPath)) {
      fs.mkdirSync(targetResultPath, { recursive: true })
    }
    let fileName = template.name.replace('.pug', '')
    if (type === 'COMPONENT') {
      fileName = fileName.replace('*', slot.componentName)
    } else if (type === 'HOOK') {
      fileName = fileName.replace('*', slot.hookName)
    } else if (type === 'TABLE_PAGE_FEATURE') {
      fileName = fileName.replace('*', slot.pcName)
    }

    // 创建文件
    fs.writeFileSync(path.join(targetResultPath, fileName), content, {
      encoding: 'utf-8'
    })
  })
}

// 获取当前程序脚本的目录(ESM特供)
export function getDirname() {
  const filename = fileURLToPath(import.meta.url)
  return path.dirname(filename)
}

// 目录字符串转换为小驼峰，目录字符串使用 - 分割
export function transferPathToCamelCase(pathString: string) {
  return pathString
    .split('-')
    .map((item, index) => {
      if (index === 0) {
        return item
      }
      return item.charAt(0).toUpperCase() + item.slice(1)
    })
    .join('')
}
