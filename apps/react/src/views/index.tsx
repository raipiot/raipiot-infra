import { Tag } from 'antd'

export default function Home() {
  return (
    <div className="p-12 text-gray-600">
      <p className="group text-2xl">
        This page is react playground homepage of raipiot infra{' '}
        <i className="i-[mdi--robot-love-outline] transition-all group-hover:x-[rotate-[10deg],scale-125,text-sky-500]" />
      </p>
      <br />
      <h1 className="py-6 text-2xl text-sky-400">Show me your code</h1>
      <ul className="list-disc px-8">
        <li>
          <Tag
            className="flex w-max items-center"
            color="#55acee"
            icon={<i className="i-[mdi--react] mr-1" />}
          >
            Component
          </Tag>
        </li>
        <li>
          <Tag
            className="flex w-max items-center"
            color="#cd201f"
            icon={<i className="i-[mdi--hook] mr-1" />}
          >
            Hooks
          </Tag>
        </li>
        <li>
          <Tag
            className="flex w-max items-center"
            color="#3b5998"
            icon={<i className="i-[mdi--state-machine] mr-1" />}
          >
            Practice to use state management
          </Tag>
        </li>
        <li>
          <Tag
            className="flex w-max items-center"
            color="#00acee"
            icon={<i className="i-[mdi--router] mr-1" />}
          >
            TanStack Router
          </Tag>
        </li>
        <li>
          <Tag
            className="flex w-max items-center"
            color="#0077b5"
            icon={<i className="i-[mdi--tailwind] mr-1" />}
          >
            Tailwindcss with icon
          </Tag>
        </li>
        <li>other...</li>
      </ul>
    </div>
  )
}
