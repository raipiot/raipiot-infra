/* eslint-disable @typescript-eslint/ban-ts-comment */
import { spawn } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'

// @ts-expect-error
import figlet from 'figlet-promised'
import gradient from 'gradient-string'
import inquirer from 'inquirer'
import { cyan, red } from 'kolorist'
import { shuffle } from 'lodash-es'

export async function defaultAction() {
  const packageFilePath = path.join(process.cwd(), 'package.json')
  const isExistPackageFile = fs.existsSync(packageFilePath)
  if (isExistPackageFile) {
    try {
      const packageJson = fs.readFileSync(packageFilePath, 'utf-8')
      const packageObj = JSON.parse(packageJson)
      // show all scripts
      const { scripts, name, description } = packageObj
      const figletString = await figlet(name)
      console.log(gradient('cyan', 'pink')(figletString ?? name))
      console.log(cyan(`\n\n\t\t${description}\n\n`))
      const choices = Object.keys(scripts).map((key) => ({
        title: key,
        value: key,
        description: scripts[key]
      }))
      const { script } = await inquirer.prompt([
        {
          type: 'search-list',
          name: 'script',
          message: 'Choose a script to run',
          choices,
          pageSize: 10
        }
      ])
      const command = spawn('pnpm', [script])
      let colorList = [
        'teen',
        'mind',
        'morning',
        'vice',
        'passion',
        'fruit',
        'instagram',
        'atlas',
        'retro',
        'summer',
        'pastel',
        'rainbow'
      ]
      command.stdout.on('data', (data) => {
        const rawString = data.toString() as string
        const lines = rawString.split('\n')
        lines.forEach((line, idx) => {
          const [title, ...rest] = line.split(' ')
          if (idx === 0 || !lines[idx - 1].includes(title)) {
            colorList = shuffle(colorList)
          }
          const color = colorList[0]
          // @ts-ignore
          console.log(gradient[color](title), ' ', rest.join(' '))
        })
      })
    } catch (error) {
      console.log(red('package.json is not a valid json file'))
    }
  } else {
    console.log(cyan('package.json not found in current directory.Bye~'))
  }
}
