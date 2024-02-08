import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/components/')({
  component: () => <div>Hello /components/!</div>
})