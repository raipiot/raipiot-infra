import type { AffixProps } from 'antd'
import type { HTMLAttributes, PropsWithChildren, ReactNode } from 'react'

export interface PageContainerProps extends PropsWithChildren {
  /**
   * 头部区域
   */
  header?: ReactNode
  /**
   * 底部区域
   */
  footer?: ReactNode
  /**
   * 是否固定头部
   * @default false
   */
  fixedHeader?: boolean
  /**
   * Affix 组件属性
   */
  affixProps?: AffixProps
  /**
   * 最外层容器属性
   */
  rootProps?: HTMLAttributes<HTMLDivElement>
}
