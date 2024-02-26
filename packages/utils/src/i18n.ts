import type { MaybeI18nString } from './types/i18n'

/**
 * 国际化工具类
 * @summary 用于处理国际化相关的逻辑
 * @author Bruce Song <recall4056@gmail.com>
 * @license MIT
 */
export class I18nUtils {
  /**
   * 获取未知情况的多语言文本
   * @param text - 字符串、多语言文本函数
   * @example
   * ```ts
   * const i18nString = ()=> t("Hello, World!")
   * const text = I18nUtils.getText(i18nString)
   * ```
   */
  getText(text?: MaybeI18nString) {
    if (!text) {
      return ''
    }
    return typeof text === 'function' ? text() : text
  }
}
