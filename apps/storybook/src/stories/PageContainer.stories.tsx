import { PageContainer } from '@raipiot-infra/antd'
import type { Meta, StoryObj } from '@storybook/react'
import { Button, Space } from 'antd'

import { View } from '@/components'

const meta = {
  title: 'Layout/PageContainer',
  component: PageContainer,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof PageContainer>

export default meta

type Story = StoryObj<typeof meta>

export const Base: Story = {
  args: {}
}

export const Footer: Story = {
  render: () => (
    <View>
      <PageContainer
        footer={
          <Space>
            <Button>取消</Button>
            <Button>确认</Button>
          </Space>
        }
      />
    </View>
  )
}
