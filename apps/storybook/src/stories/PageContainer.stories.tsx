import { PageContainer } from '@raipiot-infra/antd'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Space } from 'antd'

import { ViewBox } from '@/components'

const meta = {
  title: 'raipiot 设计系统/布局/PageContainer',
  component: PageContainer,
  tags: ['autodocs']
} satisfies Meta<typeof PageContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  name: '基本',
  args: {}
}

export const Footer: Story = {
  name: '底部操作栏',
  render: () => (
    <ViewBox>
      <PageContainer
        footer={
          <Space>
            <Button>取消</Button>
            <Button>确认</Button>
            <div className="text-blue-500 dark:text-yellow-500">Text</div>
          </Space>
        }
      />
    </ViewBox>
  )
}
