import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import { createSpinner } from 'nanospinner'
import path from 'path'

// import { GenerateCodeEnum } from '../../types'
import { getRaipiotConfigRootPath, transferTemplateAndGenerateResult } from '../../utils'
import { defaultFuzzySearchQuestion, generatePascalCase } from './common'

export const generateComponent = async () => {
  const rootPath = await getRaipiotConfigRootPath() // 找到路由目录，确认是否存在
  const { targetPath, componentName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath,
      name: 'targetPath',
      message: 'Please select the component directory you want to generate:'
    },
    {
      type: 'text',
      name: 'componentName',
      message: 'Please input the component name:',
      validate: (input: string) => {
        if (!/^[A-Z][a-zA-Z]*$/.test(input)) {
          return 'The component name must be in PascalCase'
        }
        return true
      }
    }
  ])
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, componentName)

  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult('COMPONENT', targetFileFullPath, {
    componentName,
    pcComponentName: generatePascalCase(componentName)
  })
  spinner.stop({
    text: `${componentName} generated successfully!`
  })
}
