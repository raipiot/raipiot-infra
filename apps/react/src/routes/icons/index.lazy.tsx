import { createLazyFileRoute } from '@tanstack/react-router'

import IconsCenter from '@/views/Icons'

export const Route = createLazyFileRoute('/icons/')({
  component: () => <IconsCenter />
})
