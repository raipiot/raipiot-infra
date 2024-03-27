import path from 'node:path'

import inquirer from 'inquirer'
import { createSpinner } from 'nanospinner'

import { getRaipiotConfigRootPath, transferTemplateAndGenerateResult } from '../../utils'
import { defaultFuzzySearchQuestion } from './common'

export const generateHook = async () => {
  const rootPath = await getRaipiotConfigRootPath() // 找到目录，确认是否存在
  const { targetPath, hookName } = await inquirer.prompt([
    {
      ...defaultFuzzySearchQuestion,
      rootPath,
      name: 'targetPath',
      message: 'Please select the target directory you want to generate:'
    },
    {
      type: 'text',
      name: 'hookName',
      message: 'Please input the hook name:',
      validate: (input: string) => {
        if (!/use[a-zA-Z]*$/.test(input)) {
          return 'The hook name must be in useXXX'
        }
        return true
      }
    }
  ])
  const spinner = createSpinner('Generating...', {
    color: 'green'
  })
  const targetFileFullPath = path.join(targetPath, hookName)
  const slot = {
    hookName
  }
  // 加载模板，修改模板，写入文件
  await transferTemplateAndGenerateResult({
    targetPath: targetFileFullPath,
    type: 'HOOK',
    slot
  })
  spinner.stop({
    text: `${hookName} generated successfully!`
  })
}
