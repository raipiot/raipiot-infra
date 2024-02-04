export class BrandConfig {
  /**
   * 品牌名称
   */
  static readonly name: string = 'raipiot'

  /**
   * 官方网址
   */
  static readonly url: string = 'https://www.raipiot.com'

  /**
   * 公司全名
   */
  static readonly fullName: string = '苏州睿朴麟信息科技有限公司'

  /**
   * 公司邮箱
   */
  static readonly email: string = 'us@raipiot.com'

  static getMailTo(): string {
    return `mailto:${BrandConfig.email}`
  }
}
