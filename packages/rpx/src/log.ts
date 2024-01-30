import { bgBlue, lightGreen, lightRed } from 'kolorist'

import { CliConfig } from './config'

export class Logger {
  public static info(message: string) {
    process.stdout.write(`${bgBlue(` ${CliConfig.name} `)} ${message}\n`)
  }

  public static success(message: string) {
    process.stdout.write(`${bgBlue(` ${CliConfig.name} `)} ${lightGreen(message)}\n`)
  }

  public static error(message: string) {
    process.stdout.write(`${bgBlue(` ${CliConfig.name} `)} ${lightRed(message)}\n`)
  }
}
