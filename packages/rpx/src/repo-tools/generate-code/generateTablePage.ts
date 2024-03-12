import fs from 'node:fs'
import path from 'node:path'

import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import { createSpinner } from 'nanospinner'

// import { GenerateCodeEnum } from '../../types'
import {
  getRaipiotConfigRootPath,
  transferPathToCamelCase,
  transferTemplateAndGenerateResult
} from '../../utils'
import { defaultFuzzySearchQuestion, generateConstantCase, generatePascalCase } from './common'

export const generateTablePage = async () => {
  const rootPath = await getRaipiotConfigRootPath()
  // 找到路由目录，确认是否存在
  const { targetPath, routeName, featurePath, apiPath, apiPrefix } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      name: 'targetPath',
      message: 'Please select the route directory you want to generate:',
      rootPath
    },
    {
      ...defaultFuzzySearchQuestion,
      name: 'featurePath',
      message: 'Please select the feature directory you want to generate:',
      rootPath
    },
    {
      ...defaultFuzzySearchQuestion,
      name: 'apiPath',
      message: 'Please select the api directory you want to generate:',
      rootPath
    },
    {
      type: 'text',
      name: 'apiPrefix',
      message: 'Please input the api prefix(option):',
      default: ''
    },
    {
      type: 'text',
      name: 'routeName',
      message: 'Please input the page name:',
      validate: (input: string) => {
        if (!/^[a-z\-A-Z]*$/.test(input)) {
          return 'The page name should only contain letters'
        }
        return true
      }
    }
  ])
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, routeName)
  const slot = {
    ccName: transferPathToCamelCase(routeName),
    pcName: generatePascalCase(routeName),
    constName: generateConstantCase(routeName),
    featureName: `${featurePath.replace(/^.*feature(s)?\//, '')}/${routeName}`,
    apiPrefix: generatePascalCase(apiPrefix)
  }
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('STANDARD_TABLE_PAGE', targetFileFullPath, slot)
  // 再加载 table_page_feature 模板，修改模板，写入文件
  await transferTemplateAndGenerateResult(
    'TABLE_PAGE_FEATURE',
    path.join(featurePath, routeName),
    slot
  )
  await transferTemplateAndGenerateResult('API', path.join(apiPath, routeName), slot)
  // 更新 api 目录下的 index.ts，追加一行导入语句
  const apiIndexFile = path.join(apiPath, 'index.ts')
  if (fs.existsSync(apiIndexFile) && fs.statSync(apiIndexFile).isFile()) {
    fs.appendFileSync(apiIndexFile, `export * from './${routeName}'\n`)
  }
  spinner.stop({
    text: `${routeName} generated successfully!`
  })
}
