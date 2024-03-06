/* eslint-disable no-console */
import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import fuzzy from 'inquirer-fuzzy-path'
// eslint-disable-next-line
// @ts-ignore
import isl from 'inquirer-search-list'

import { generateAPI } from './generateAPI'
import { generateFeature } from './generateFeature'

inquirer.registerPrompt('fuzzy-search', fuzzy)
inquirer.registerPrompt('search-list', isl)

enum CodeType {
  API = 'API',
  FEATURE = 'Feature',
  CUSTOM_HOOK = 'Custom hook',
  COMPONENT = 'Component',
  TABLE = 'Table',
  MODAL = 'Modal'
}

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
        title: CodeType.CUSTOM_HOOK,
        value: CodeType.CUSTOM_HOOK,
        description: 'Generate a new custom hook'
      },
      {
        title: CodeType.COMPONENT,
        value: CodeType.COMPONENT,
        description: 'Generate a new component'
      },
      {
        title: CodeType.TABLE,
        value: CodeType.TABLE,
        description: 'Generate a new table'
      },
      {
        title: CodeType.MODAL,
        value: CodeType.MODAL,
        description: 'Generate a new modal'
      }
    ]

    const result = await inquirer.prompt([
      {
        type: 'search-list',
        name: 'generateType',
        message: 'What do you want to generate?',
        choices: generateTypeChoices
      }
    ])

    switch (result.generateType as CodeType) {
      case CodeType.API:
        generateAPI()
        break
      case CodeType.FEATURE:
        generateFeature()
        break
      default:
        break
    }

    // const { status } = spawn.sync('', [], {
    //   stdio: 'inherit'
    // })
    // process.exit(status ?? 0)
  } catch (error) {
    console.log((error as Error).message)
  }
}
