import { createLazyFileRoute } from '@tanstack/react-router'

import About from '@/views/About'

export const Route = createLazyFileRoute('/about')({
  component: () => <About />
})
