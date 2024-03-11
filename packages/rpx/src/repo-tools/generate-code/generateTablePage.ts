import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import { createSpinner } from 'nanospinner'
import path from 'path'

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
  const { targetPath, routeName, featurePath } = await inquirer.prompt([
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
    featureName: `${featurePath.replace(/^.*featrue\//, '')}/${routeName}`
  }
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('STANDARD_TABLE_PAGE', targetFileFullPath, slot)
  // 再加载 table_page_feature 模板，修改模板，写入文件
  await transferTemplateAndGenerateResult(
    'TABLE_PAGE_FEATURE',
    path.join(featurePath, routeName),
    slot
  )
  spinner.stop({
    text: `${routeName} generated successfully!`
  })
}
