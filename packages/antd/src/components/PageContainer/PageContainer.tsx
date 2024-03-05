import type { PageContainerProps } from './PageContainer.types'

function PageContainer(props?: PageContainerProps) {
  const { header, footer } = props ?? {}
  return (
    <div className="text-red-500 dark:text-blue-500">
      {header && header}
      标题
      {footer && footer}
    </div>
  )
}

PageContainer.displayName = 'PageContainer'

export default PageContainer
