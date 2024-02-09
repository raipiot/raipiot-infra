import './styles/tailwind.css'
import './styles/main.scss'

import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { routeTree } from './routeTree.gen'

const router = createRouter({ routeTree })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

// Render the app
const root = document.getElementById('root')
if (root && !root?.innerHTML) {
  const rootElement = ReactDOM.createRoot(root)
  rootElement.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  )
}

