export class BrandConfig {
  /**
   * 品牌名称
   */
  static readonly companyName: string = 'raipiot'

  /**
   * 公司全名
   */
  static readonly companyFullName: string = '苏州睿朴麟信息科技有限公司'

  /**
   * 官方网址
   */
  static readonly websiteUrl: string = 'https://www.raipiot.com'

  /**
   * 公司邮箱
   */
  static readonly email: string = 'us@raipiot.com'

  /**
   * 获取 MailTo 链接
   * @returns MailTo 链接
   * @example
   * ```typescript
   * BrandConfig.getMailTo()
   * ```
   */
  static getMailTo(): string {
    return `mailto:${BrandConfig.email}`
  }
}
