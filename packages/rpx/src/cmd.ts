import { exit } from 'node:process'

import { program } from 'commander'
import inquirer from 'inquirer'
// eslint-disable-next-line
// @ts-ignore
import fuzzy from 'inquirer-fuzzy-path'
// eslint-disable-next-line
// @ts-ignore
import isl from 'inquirer-search-list'

import { CliConfig } from './config'
import { t } from './i18n'
import { Logger } from './log'
import { add, check, generateCode, generateContributors } from './repo-tools'
import { defaultAction } from './repo-tools/defaultAction'

inquirer.registerPrompt('fuzzy-search', fuzzy)
inquirer.registerPrompt('search-list', isl)

program
  .name(CliConfig.name)
  .description(t('App.Description'))
  .version(CliConfig.version, '-v, --version', t('Display.Current.Version'))
  .helpOption('-h, --help', t('Display.Help.Command'))
  .helpCommand(false)
  .action(defaultAction)

program.command('check').description(t('Commands.Check')).action(check)
program.command('add').description(t('Commands.Add')).action(add)
program
  .command('gen-contributors')
  .description(t('Commands.Gen_contributors'))
  .action(generateContributors)

program.command('gen-code').description(t('Commands.Gen_code')).action(generateCode)

program.on('command:*', () => {
  Logger.error(t('Action.Not.Match'))
  exit(1)
})

program.parse(process.argv)
