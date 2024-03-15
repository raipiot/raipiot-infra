import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { GoogleGenerativeAI } from '@google/generative-ai'
import inquirer from 'inquirer'
import { red } from 'kolorist'

import type { RaipiotConfig } from './types'
import type { CodeTypeKey } from './types/genCode'

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

/**
 * 复制 API 代码到指定目录，并且进行替换
 * @param type 替换类型
 * @param targetPath 目标目录，用于生成文件，如果不存在会自动创建
 * @param slot 插槽对象，用于替换模板中的占位符
 */
export const transferTemplateAndGenerateResult = async <
  T extends {
    [key: string]: string
  }
>({
  type,
  targetPath,
  slot,
  templatePrefixPath = ''
}: {
  type: CodeTypeKey
  targetPath: string
  slot: T
  templatePrefixPath?: string
}) => {
  // 创建文件夹
  fs.mkdirSync(targetPath, { recursive: true })
  const dirname = getDirname()
  // 加载模板，修改模板，写入文件
  // 带空格的类型需要转换为 - 分割的字符串作为路径
  const templatePath = path.join(
    dirname,
    'templates',
    templatePrefixPath,
    type.toLowerCase().replace(/[\s_]/g, '-')
  )
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
    } else if (type === 'STANDARD_TABLE_PAGE' || type === 'TREE_TABLE_PAGE') {
      //  文件名仅存在单个星号或两个星号的情况，因此不需要考虑多个星号的情况
      fileName = fileName.replace(/\*\*/, slot.pcNames)
      fileName = fileName.replace(/\*/, slot.pcName)
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

// 从环境变量中读取 Gemini Key
export async function getGeminiKey() {
  let geminiKey = process.env.GEMINI_API
  if (!geminiKey) {
    const { key } = await inquirer.prompt([
      {
        type: 'text',
        name: 'key',
        message: 'Please input the Gemini Key:'
      }
    ])
    const isValid = await testGeminiKey(key)
    if (isValid) {
      geminiKey = key
      process.env.GEMINI_API = key
    } else {
      return getGeminiKey()
    }
  }
  return geminiKey
}

// 测试 Gemini Key 是否有效
export async function testGeminiKey(key: string) {
  const genAI = new GoogleGenerativeAI(key)
  try {
    const robot = genAI.getGenerativeModel({
      model: 'gemini-pro'
    })
    const result = await robot.generateContent('Hello')
    await result.response.text()
    return true
  } catch {
    return false
  }
}

export async function askForGeminiKey(question: string) {
  const geminiKey = await getGeminiKey()
  const genAI = new GoogleGenerativeAI(geminiKey!)
  const robot = genAI.getGenerativeModel({
    model: 'gemini-pro'
  })
  const result = await robot.generateContent(question)
  const response = await result.response
  return response.text()
}

// 询问目标单词的单复数分别是什么
export async function askForPluralAndSingular(word: string, isRetry = false) {
  try {
    const rawString = await askForGeminiKey(
      `What is the plural and singular of ${word}?Connect singular and plural words with symbol *.For example:user*users`
    )
    const [singular, plural] = rawString.split('*')
    return { singular, plural } as { plural: string; singular: string }
  } catch (error) {
    if (isRetry) {
      console.log(red('Error: Failed to get plural and singular'))
      process.exit(1)
    }
    return askForPluralAndSingular(word, true)
  }
}
