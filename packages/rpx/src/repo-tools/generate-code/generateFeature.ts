import fs from 'fs'
import inquirer from 'inquirer'
import path from 'path'
import { transferTemplateAndGenerateResult } from '../../utils'
import { createSpinner } from 'nanospinner'
import {
  defaultFuzzySearchQuestion,
  generatePascalCase,
  generateConstantCase,
  validate,
  generateCamelCase
} from './common'
import { generateCodeEnum } from '../../types'

export const generateFeature = async () => {
  // 找到路由目录，确认是否存在
  const { targetPath, featureName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath: process.cwd(),
      name: 'targetPath',
      message: 'Please select the feature directory you want to generate:'
    },
    {
      type: 'text',
      name: 'featureName',
      message: 'Please input the feature name:',
      validate
    }
  ])
  const spinner = createSpinner('Generating API...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, featureName)
  // 创建文件夹
  fs.mkdirSync(targetFileFullPath, { recursive: true })
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult(generateCodeEnum.feature, targetFileFullPath, {
    pcFeatureName: generatePascalCase(featureName),
    constFeatureName: generateConstantCase(featureName),
    ccFeatureName: generateCamelCase(featureName)
  })
  spinner.stop({
    text: 'new feature generated successfully'
  })
}
