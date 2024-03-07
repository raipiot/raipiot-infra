import { Card } from 'antd'
import type { PropsWithChildren } from 'react'

export function ViewBox(props: PropsWithChildren) {
  return <Card className="w-[calc(100vw-32px)] sm:w-[800px]">{props.children}</Card>
}
