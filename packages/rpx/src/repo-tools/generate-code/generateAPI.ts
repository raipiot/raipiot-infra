// eslint-disable-next-line
// @ts-ignore
import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import { createSpinner } from 'nanospinner'
import path from 'path'

import { transferTemplateAndGenerateResult } from '../../utils'
import {
  defaultFuzzySearchQuestion,
  generateCamelCase,
  generatePascalCase,
  validate
} from './common'

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
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, apiName)
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('API', targetFileFullPath, {
    apiName: generateCamelCase(apiName),
    apiClassPrefix: generatePascalCase(apiName)
  })
  spinner.stop({
    text: `${apiName} generated successfully!`
  })
}
