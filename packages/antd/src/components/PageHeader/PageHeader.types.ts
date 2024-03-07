import type { PropsWithChildren, ReactNode } from 'react'

export interface PageHeaderProps extends PropsWithChildren {
  /**
   * 标题
   */
  title?: ReactNode
  /**
   * 图标
   */
  icon?: ReactNode
  /**
   * 操作区域
   */
  operate?: ReactNode
  /**
   * 操作区域样式
   */
  operateProps?: React.HTMLAttributes<HTMLDivElement>
  /**
   * 最外层容器属性
   */
  rootProps?: React.HTMLAttributes<HTMLDivElement>
}
