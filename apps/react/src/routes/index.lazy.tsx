import { createLazyFileRoute } from '@tanstack/react-router'

import Home from '@/views/index'

export const Route = createLazyFileRoute('/')({
  component: () => <Home />
})
