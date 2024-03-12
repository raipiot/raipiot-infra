// eslint-disable-next-line
// @ts-ignore
import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import { createSpinner } from 'nanospinner'
import path from 'path'

import { getRaipiotConfigRootPath, transferTemplateAndGenerateResult } from '../../utils'
import {
  defaultFuzzySearchQuestion,
  generateCamelCase,
  generateConstantCase,
  generatePascalCase,
  validate
} from './common'

export const generateFeature = async () => {
  const rootPath = await getRaipiotConfigRootPath() // 找到路由目录，确认是否存在
  const { targetPath, featureName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath,
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
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, featureName)
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('FEATURE', targetFileFullPath, {
    pcFeatureName: generatePascalCase(featureName),
    constFeatureName: generateConstantCase(featureName),
    ccFeatureName: generateCamelCase(featureName)
  })
  spinner.stop({
    text: `${featureName} generated successfully!`
  })
}
