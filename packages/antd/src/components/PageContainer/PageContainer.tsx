import { PageHeader } from '../PageHeader'
import type { PageContainerProps } from './PageContainer.types'

function PageContainer(props?: PageContainerProps) {
  const { header, footer, fixedHeader, affixProps, rootProps, children } = props ?? {}
  return (
    <div {...rootProps}>
      {header && <PageHeader />}
      {children}
      {footer && footer}
    </div>
  )
}

PageContainer.displayName = 'PageContainer'

export default PageContainer
