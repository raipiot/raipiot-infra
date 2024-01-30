import type en_US from '../locales/en-US.json'

export interface Translation {
  [key: string]: string | Translation
}

export type Lang = 'en-US' | 'zh-CN'

type JSONSchema = typeof en_US

type Concat<K extends string, V extends string> = `${K}.${V}`

type Flatten<T, K extends string = ''> =
  T extends Record<string, any>
    ? {
        [P in keyof T]: Flatten<T[P], K extends '' ? P : Concat<K, P & string>>
      }[keyof T]
    : K

export type MessageSchema = Flatten<JSONSchema>
