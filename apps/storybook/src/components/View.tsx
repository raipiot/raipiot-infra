import { Card } from 'antd'
import type { PropsWithChildren } from 'react'

export function View(props: PropsWithChildren) {
  return <Card>{props.children}</Card>
}
