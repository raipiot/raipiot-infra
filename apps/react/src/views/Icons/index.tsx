import { BrowserUtils } from '@raipiot-infra/utils'
import { useMutation } from '@tanstack/react-query'
import { Input, message, Skeleton, Tag } from 'antd'
import { useState } from 'react'

import { iconsApi } from '@/api/icons'

import Tips from './components/Tip'

export default function IconsCenter() {
  const [query, setQuery] = useState('')
  const [selected, setSelected] = useState<string>()

  const { data, isPending, isError, mutate } = useMutation({
    mutationFn: () => iconsApi.queryIcons({ query })
  })

  if (isPending) {
    return (
      <Skeleton
        active
        className="m-4 mx-auto mt-32 max-w-[960px]"
      />
    )
  }
  if (isError) {
    return <p className="text-md m-12 text-center text-red-500">Error...</p>
  }

  return (
    <div className="p-4">
      <Input.Search
        value={query}
        onChange={(v) => {
          setQuery(v.target.value)
        }}
        className="mx-auto my-12 block w-[300px]"
        placeholder="Search..."
        onSearch={(v) => {
          if (v !== '') {
            mutate()
          }
        }}
        allowClear
      />
      {data ? (
        <div className="mx-auto grid max-w-[960px] grid-cols-[500px_auto]">
          <div className="flex flex-wrap gap-3">
            {data?.icons.map((icon) => (
              <img
                key={icon}
                className="size-8 cursor-pointer rounded-sm border p-[2px] hover:x-[border-sky-400,scale-110]"
                src={`https://api.iconify.design/${icon.replace(':', '/')}.svg`}
                alt={icon}
                onClick={() => {
                  setSelected(icon)
                  BrowserUtils.setClipBoardText(
                    `<span className="i-[${icon.replace(':', '--')}]" />`
                  )
                  message.success(`Copied: <span className="i-[${icon.replace(':', '--')}]" />`)
                }}
              />
            ))}
          </div>
          {selected ? (
            <Tag color="processing">
              <div className="flex flex-col gap-1 p-2 pt-4 *:cursor-pointer">
                <div
                  className="group flex items-center gap-1 text-sm"
                  onClick={() => {
                    BrowserUtils.setClipBoardText(
                      `<span className="i-[${selected.replace(':', '--')}]" />`
                    )
                    message.success(
                      `Copied: <span className="i-[${selected.replace(':', '--')}]" />`
                    )
                  }}
                >
                  <div className="w-max rounded-md border bg-sky-500 p-1 px-2 text-white">{`<span className="i-[${selected.replace(':', '--')}]" />`}</div>
                  <span className="i-[bitcoin-icons--copy-outline] hidden text-[18px] group-hover:inline-block" />
                </div>
                <div
                  className="group flex items-center gap-1 text-sm"
                  onClick={() => {
                    BrowserUtils.setClipBoardText(`i-[${selected.replace(':', '--')}]`)
                    message.success(`Copied: i-[${selected.replace(':', '--')}]`)
                  }}
                >
                  <div className="w-max rounded-md border bg-sky-500 p-1 px-2 text-white">{`i-[${selected.replace(':', '--')}]`}</div>
                  <span className="i-[bitcoin-icons--copy-outline] hidden text-[18px] group-hover:inline-block" />
                </div>
              </div>
            </Tag>
          ) : (
            <Tag
              color="success"
              className="p-4"
            >
              <Tag color="success">$</Tag>
              cd <a href="https://icones.js.org/">~</a>
            </Tag>
          )}
        </div>
      ) : (
        <Tips />
      )}
    </div>
  )
}
