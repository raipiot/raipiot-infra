import path from 'node:path'

import fs from 'fs'

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

// 从 github 下载模板
export const downloadTemplate = async (templateName: string) => {
  console.log(templateName)
}
