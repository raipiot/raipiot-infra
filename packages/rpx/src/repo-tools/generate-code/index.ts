/* eslint-disable no-console */
import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import fuzzy from 'inquirer-fuzzy-path'
// eslint-disable-next-line
// @ts-ignore
import isl from 'inquirer-search-list'
import { red } from 'kolorist'

import { recursionFindRaipiotConfig } from '../../utils'
import { generateAPI } from './generateAPI'

inquirer.registerPrompt('fuzzy-search', fuzzy)
inquirer.registerPrompt('search-list', isl)

enum CodeType {
  API = 'API',
  ROUTE = 'Route',
  CUSTOM_HOOK = 'Custom hook',
  COMPONENT = 'Component',
  TABLE = 'Table',
  MODAL = 'Modal'
}

export async function generateCode() {
  try {
    const config = await recursionFindRaipiotConfig()
    globalThis.raipiotConfig = config!.config
    globalThis.projectRootPath = config!.rootPath
    console.log(`projectRootPath: ${globalThis.projectRootPath}`)

    // globalThis.globalConfigKey = globalConfig
    if (globalThis.raipiotConfig === null) {
      throw new Error(`${red('✖')} raipiot.config.js not found, you need to create one first`)
    }
    const generateTypeChoices = [
      {
        title: CodeType.ROUTE,
        value: CodeType.ROUTE,
        description: 'Generate a new route'
      },
      {
        title: CodeType.API,
        value: CodeType.API,
        description: 'Generate a new API'
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
