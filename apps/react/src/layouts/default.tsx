import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Link, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60
    }
  }
})

export function DefaultLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="text-bold flex gap-4 bg-gradient-to-tr from-gray-900 to-gray-800 p-4 py-8 text-white md:p-8">
        <h1 className="mr-auto flex items-center gap-1 text-2xl">
          <i className="i-[mdi--react] text-3xl text-sky-500" />
          React Playground
        </h1>
        <Link
          to="/"
          className="flex items-center gap-1 [&.active]:text-sky-500"
        >
          <i className="i-[material-symbols-light--home-work-outline]" />
          Home
        </Link>
        <Link
          to="/components"
          className="flex items-center gap-1 [&.active]:text-sky-500"
        >
          <i className="i-[ph--code-duotone]" />
          Components
        </Link>
        <Link
          to="/about"
          className="flex items-center gap-1 [&.active]:text-sky-500"
        >
          <i className="i-[carbon--departure]" />
          About
        </Link>
        <Link
          to="/icons"
          className="flex items-center gap-1 [&.active]:text-sky-500"
        >
          <i className="i-[carbon--iot-connect]" />
          Icons
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </QueryClientProvider>
  )
}
