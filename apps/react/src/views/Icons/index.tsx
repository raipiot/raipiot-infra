import { useQuery } from '@tanstack/react-query'

import { iconsApi } from '@/api/icons'

export default function IconsCenter() {
  const { data, isLoading } = useQuery({
    queryKey: ['icons'],
    queryFn: () => iconsApi.getIconCollections(),
    select: (value) => Object.values(value)
  })

  if (isLoading) {
    return <p>Loading...</p>
  }

  return (
    <div className="p-4">
      <h1
        onClick={() => {
          console.log(data)
        }}
        className="mb-4 p-1 px-2 text-2xl"
      >
        All Icons
      </h1>
      <div className="grid grid-cols-2 gap-12 pb-12 sm:grid-cols-6 xl:grid-cols-8">
        {data?.slice(0, 32).map(({ name, samples }, idx) => (
          <div
            key={name + idx}
            className="min-h-[120px] border p-2 transition-all hover:x-[shadow-sm,shadow-sky-100,bg-sky-500,text-white]"
          >
            <div className="pb-4 text-sm">{name}</div>
            <div className="flex items-center gap-2">
              {samples.map((iconName) => (
                <img
                  key={iconName}
                  src={`https://api.iconify.design/${name.toLowerCase().replaceAll(' ', '-')}/${iconName}.svg`}
                  className="size-8 bg-cover bg-no-repeat"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
