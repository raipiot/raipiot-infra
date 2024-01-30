/* eslint-disable no-console */
import fs from 'node:fs'

import { green, red } from 'kolorist'

const currentDirectory = process.cwd()

const checkSuccessLog = (name: string) => console.log(`${green('✓')} ${name}`)
const checkFailedLog = (name: string) => console.log(`${red('✗')} ${name}`)

export function check() {
  fs.readdir(currentDirectory, (err, files) => {
    if (err) {
      console.error('Error reading current dir...', err)
      return
    }

    // CSpell
    if (fs.existsSync('.cspell.json')) {
      checkSuccessLog('.cspell.json')
    } else {
      checkFailedLog('.cspell.json')
    }

    // .editorconfig
    if (fs.existsSync('.editorconfig')) {
      checkSuccessLog('.editorconfig')
    } else {
      checkFailedLog('.editorconfig')
    }

    // .gitattributes
    if (fs.existsSync('.gitattributes')) {
      checkSuccessLog('.gitattributes')
    } else {
      checkFailedLog('.gitattributes')
    }

    // .gitignore
    if (fs.existsSync('.gitignore')) {
      checkSuccessLog('.gitignore')
    } else {
      checkFailedLog('.gitignore')
    }

    // ESLint
    const hasESLint = files.find((file) => file.startsWith('.eslintrc'))
    if (hasESLint) {
      checkSuccessLog('.eslintrc')
    } else {
      checkFailedLog('.eslintrc')
    }

    // Prettier
    const hasPrettier = files.find((file) => file.startsWith('.prettierrc'))
    if (hasPrettier) {
      checkSuccessLog('.prettierrc')
    } else {
      checkFailedLog('.prettierrc')
    }
  })
}
