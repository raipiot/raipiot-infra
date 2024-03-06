import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { transferTemplateAndGenerateResult } from '../../utils'
import { createSpinner } from 'nanospinner'
import {
  defaultFuzzySearchQuestion,
  generateCamelCase,
  generatePascalCase,
  validate
} from './common'
import { generateCodeEnum } from '../../types'

export const generateAPI = async () => {
  // 找到路由目录，确认是否存在
  const { targetPath, apiName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath: process.cwd(),
      name: 'targetPath',
      message: 'Please select the api directory you want to generate:'
    },
    {
      type: 'text',
      name: 'apiName',
      message: 'Please input the API name:',
      validate
    }
  ])
  const spinner = createSpinner('Generating API...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, apiName)
  // 创建文件夹
  fs.mkdirSync(targetFileFullPath, { recursive: true })
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult(generateCodeEnum.api, targetFileFullPath, {
    apiName: generatePascalCase(apiName),
    apiClassPrefix: generateCamelCase(apiName)
  })
  spinner.stop({
    text: 'API generated successfully'
  })
}
