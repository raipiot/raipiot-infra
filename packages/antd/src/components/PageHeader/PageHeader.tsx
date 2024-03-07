import clsx from 'clsx'

import type { PageHeaderProps } from './PageHeader.types'

function PageHeader(props: PageHeaderProps) {
  const { title, icon, operate, operateProps, rootProps } = props
  return (
    <div {...rootProps}>
      <div className="mb-2 flex items-center justify-between space-x-2 sm:mb-4 sm:space-x-4">
        <div className="flex items-center space-x-2">
          {icon && <div className="text-xl">{icon}</div>}
          {title && <div className="text-2xl">{title}</div>}
        </div>
        {operate && (
          <div
            {...operateProps}
            className={clsx('space-x-2', operateProps?.className)}
          >
            {operate}
          </div>
        )}
      </div>
    </div>
  )
}

PageHeader.displayName = 'PageHeader'

export default PageHeader
