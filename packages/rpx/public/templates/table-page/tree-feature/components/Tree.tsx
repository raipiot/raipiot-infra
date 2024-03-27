import type { DeptTreeVo } from '@raipiot-2f/api'
import type { CardProps, TreeDataNode, TreeProps } from 'antd'

import { treeQueryOptions } from '../queries'

interface DeptTreeProps {
  cardProps?: CardProps
  treeProps?: TreeProps
  deptId?: string
  onSelectDeptId?: (id: string) => void
}

export function Tree(props: DeptTreeProps) {
  const { cardProps, treeProps, deptId } = props

  const { t } = useTranslation()
  const [searchText, setSearchText] = useState('')

  const { data } = useSuspenseQuery(treeQueryOptions())

  const treeData = useMemo(() => {
    const loop = (list: DeptTreeVo[]): TreeDataNode[] =>
      list
        .map((item) => {
          const strTitle = item.title as string
          const index = strTitle.indexOf(searchText)
          const beforeStr = strTitle.substring(0, index)
          const afterStr = strTitle.slice(index + searchText.length)
          const title =
            index > -1 ? (
              <span>
                {beforeStr}
                <span className="text-blue-500">{searchText}</span>
                {afterStr}
              </span>
            ) : (
              <span>{strTitle}</span>
            )
          const children = item.children ? loop(item.children) : []
          if (index > -1 || children.length > 0) {
            return {
              title,
              key: item.key,
              children: children.length > 0 ? children : undefined
            }
          }
          return null
        })
        .filter(Boolean) as TreeDataNode[]
    return loop(data)
  }, [searchText, data])

  return (
    <ACard {...cardProps}>
      <AInput.Search
        style={{ marginBottom: 8 }}
        placeholder={t('SEARCH')}
        onSearch={(text) => setSearchText(text)}
      />
      <ATree
        showLine
        treeData={treeData}
        selectedKeys={deptId ? [deptId] : []}
        onSelect={(keys) => {
          const id = keys[0]
          props.onSelectDeptId?.(id.toString())
        }}
        defaultExpandAll
        {...treeProps}
      />
    </ACard>
  )
}
