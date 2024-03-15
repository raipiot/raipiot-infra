import inquirer from 'inquirer'

import type { CodeTypeKey } from '../../types/genCode'
import { CodeType } from '../../types/genCode'
import { generateAPI } from './generateAPI'
import { generateComponent } from './generateComponent'
import { generateFeature } from './generateFeature'
import { generateHook } from './generateHook'
import { generateTablePage } from './generateTablePage'

export async function generateCode() {
  try {
    const generateTypeChoices = [
      {
        title: CodeType.API,
        value: CodeType.API,
        description: 'Generate a new API'
      },
      {
        title: CodeType.FEATURE,
        value: CodeType.FEATURE,
        description: 'Generate a new feature'
      },
      {
        title: CodeType.HOOK,
        value: CodeType.HOOK,
        description: 'Generate a new hook'
      },
      {
        title: CodeType.COMPONENT,
        value: CodeType.COMPONENT,
        description: 'Generate a new component'
      },
      {
        title: CodeType.STANDARD_TABLE_PAGE,
        value: CodeType.STANDARD_TABLE_PAGE,
        description: 'Generate a new standard page with table/modal/search bar/toolbar...'
      }
      // {
      //   title: CodeType.TABLE,
      //   value: CodeType.TABLE,
      //   description: 'Generate a new table'
      // },
      // {
      //   title: CodeType.MODAL,
      //   value: CodeType.MODAL,
      //   description: 'Generate a new modal'
      // }
    ]

    const choiceCache = generateTypeChoices.find(
      (item) => item.value === globalThis.prefGenCodeType
    )

    const result = await inquirer.prompt([
      {
        type: 'search-list',
        name: 'generateType',
        message: 'What do you want to generate?',
        choices: choiceCache
          ? [
              choiceCache,
              ...generateTypeChoices.filter((item) => item.value !== globalThis.prefGenCodeType)
            ]
          : generateTypeChoices
      }
    ])

    globalThis.prefGenCodeType = result.generateType as CodeTypeKey

    switch (result.generateType as CodeType) {
      case CodeType.API:
        await generateAPI()
        break
      case CodeType.FEATURE:
        await generateFeature()
        break
      case CodeType.COMPONENT:
        await generateComponent()
        break
      case CodeType.HOOK:
        await generateHook()
        break
      case CodeType.STANDARD_TABLE_PAGE:
        await generateTablePage(true)
        break
      case CodeType.TREE_TABLE_PAGE:
        await generateTablePage(false)
        break
      default:
        break
    }

    // 是否退出
    const { keep } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'keep',
        message: 'Keep?'
      }
    ])
    if (keep) {
      generateCode()
    } else {
      process.exit(0)
    }
  } catch (error) {
    console.log((error as Error).message)
  }
}
