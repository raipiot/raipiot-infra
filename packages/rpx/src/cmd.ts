import { exit } from 'node:process'

import { program } from 'commander'

import { CliConfig } from './config'
import { t } from './i18n'
import { Logger } from './log'
import { add, check, generateContributors } from './repo-tools'

program
  .name(CliConfig.name)
  .description(t('App.Description'))
  .version(CliConfig.version, '-v, --version', t('Display.Current.Version'))
  .helpOption('-h, --help', t('Display.Help.Command'))
  .addHelpCommand(false)

program.command('check').description(t('Commands.Check')).action(check)
program.command('add').description(t('Commands.Add')).action(add)
program.command('g').description(t('Commands.Generate')).action(generateContributors)

program.on('command:*', () => {
  Logger.error(t('Action.Not.Match'))
  exit(1)
})

program.parse(process.argv)
