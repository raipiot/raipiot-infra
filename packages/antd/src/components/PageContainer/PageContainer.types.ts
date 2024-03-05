import type { AffixProps } from 'antd'
import type { ReactNode } from 'react'

export interface PageContainerProps {
  header?: ReactNode
  footer?: ReactNode
  fixedHeader?: boolean
  affixProps?: AffixProps
}
