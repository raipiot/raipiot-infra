import path from 'node:path'

import fs from 'fs'

import type { RaipiotConfig, generateCodeEnum } from './types'
import { fileURLToPath } from 'url'

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
export const transferTemplateAndGenerateResult = async <T extends {}>(
  type: generateCodeEnum,
  targetPath: string,
  slot: T
) => {
  const __dirname = getDirname()
  // load template and update slot data
  const templatePath = path.join(__dirname, 'templates', type)
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
    // write to target path, if the path is not exist, create it
    const targetResultPath = path.join(targetPath, template.path.replace(templatePath, ''))
    if (!fs.existsSync(targetResultPath)) {
      fs.mkdirSync(targetResultPath, { recursive: true })
    }
    // create file
    fs.writeFileSync(path.join(targetResultPath, template.name.replace('.pug', '')), content, {
      encoding: 'utf-8'
    })
  })
}

// 获取当前程序脚本的目录
export const getDirname = () => {
  const __filename = fileURLToPath(import.meta.url)
  return path.dirname(__filename)
}
