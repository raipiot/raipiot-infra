import path from 'node:path'

import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

import { getRaipiotConfigRootPath, transferTemplateAndGenerateResult } from '../../utils'
import {
  defaultFuzzySearchQuestion,
  generateCamelCase,
  generatePascalCase,
  validate
} from './common'

export const generateAPI = async () => {
  const rootPath = await getRaipiotConfigRootPath()
  // 找到路由目录，确认是否存在
  const { targetPath, apiName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath,
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
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, apiName)
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('API', targetFileFullPath, {
    ccName: generateCamelCase(apiName),
    pcName: generatePascalCase(apiName)
  })
  spinner.stop({
    text: `${apiName} generated successfully!`
  })
}
