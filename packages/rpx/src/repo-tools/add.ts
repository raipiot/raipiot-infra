/* eslint-disable no-console */
import spawn from 'cross-spawn'
import { red } from 'kolorist'
import prompts from 'prompts'

export async function add() {
  try {
    const result = await prompts(
      [
        {
          type: 'multiselect',
          name: 'suites',
          message: 'Please select the engineering suite you need to install:',
          choices: [
            {
              title: 'CSpell',
              value: 'cspell',
              description: 'Check spelling'
            },
            {
              title: 'Prettier',
              value: 'prettier',
              description: 'Code formatting'
            },
            {
              title: 'ESLint',
              value: 'eslint',
              description: 'Code linting'
            },
            {
              title: 'Husky',
              value: 'husky',
              description: 'Git hooks'
            },
            {
              title: 'Commitizen',
              value: 'commitizen',
              description: 'Lint commit messages'
            }
          ]
        },
        {
          type: (pre: string[]) => (pre.includes('eslint') ? 'select' : null),
          name: 'eslint',
          message: 'Please choose ESLint config according to your framework:',
          hint: 'press "space" to select, press "enter" to confirm',
          choices: [
            {
              title: 'React',
              value: 'react',
              description: 'React + TypeScript + TailwindCSS + Prettier'
            },
            {
              title: 'Vue',
              value: 'vue',
              description: 'Vue + TypeScript + TailwindCSS + Prettier'
            },
            {
              title: 'TypeScript',
              value: 'typescript',
              description: 'TypeScript + Prettier'
            }
          ]
        },
        {
          type: (_, values) =>
            (values.suites as string[]).includes('commitizen') ? 'select' : null,
          name: 'commitizen',
          message: 'Please choose the Commitizen type:',
          hint: 'press "space" to select, press "enter" to confirm',
          choices: [
            {
              title: 'Basic',
              value: 'basic',
              description: '@commitlint/config-conventional'
            },
            {
              title: 'With cz-git',
              value: 'cz-git',
              description: '@commitlint/config-conventional with cz-git'
            }
          ]
        }
      ],
      {
        onCancel: () => {
          throw new Error(`${red('✖')} Operation cancelled`)
        }
      }
    )

    const { suites, eslint, commitizen } = result as {
      suites: string[]
      eslint: string
      commitizen: string
    }
    console.log(suites)
    console.log(eslint)
    console.log(commitizen)

    const { status } = spawn.sync('', [], {
      stdio: 'inherit'
    })
    process.exit(status ?? 0)
  } catch (error) {
    console.log((error as Error).message)
  }
}
