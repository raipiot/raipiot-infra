import { BrowserUtils } from '@raipiot-infra/utils'
import { useMutation } from '@tanstack/react-query'
import { Input, message, Skeleton, Tag } from 'antd'
import { useState } from 'react'

import { iconsApi } from '@/api/icons'

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
    return <p>Error</p>
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
        <div className="mx-auto my-12 max-w-[600px]">
          <div>Supported keywords:</div>
          <ul className="list-disc pl-8">
            <li>
              <span className="text-sky-400">palette</span>, boolean. Filter icon sets by palette.
              Example queries:{' '}
              <span className="text-red-900">
                &ldquo;home palette=false&rdquo;, &ldquo;cat palette=true&rdquo;
              </span>
              .
            </li>
            <li>
              <span className="text-sky-400">style:</span> &ldquo;fill&rdquo; or
              &ldquo;stroke&rdquo;. Filter icons by code. Example queries:{' '}
              <span className="text-red-900">
                &ldquo;home style=fill&rdquo;, &ldquo;cat style=stroke&rdquo;
              </span>
              .
            </li>
            <li>
              <span className="text-sky-400">fill and stroke, boolean:</span> Same as above, but as
              boolean. Only one of keywords can be set: &ldquo;
              <span className="text-red-900">home fill=true</span>
              &rdquo;.
            </li>
            <li>
              <span className="text-sky-400">prefix, string:</span> Same as prefix property from
              search query parameters, but in keyword. Overrides parameter.
            </li>
            <li>
              <span className="text-sky-400">prefixes, string:</span> Same as prefixes property from
              search query parameters, but in keyword. Overrides parameter.
            </li>
          </ul>
        </div>
      )}
    </div>
  )
}
