import { PageHeader } from '@raipiot-infra/antd'
import type { Meta, StoryObj } from '@storybook/react'

import { ViewBox } from '@/components'
import { ViewIcon } from '@/icons'

const meta = {
  title: 'raipiot 设计系统/布局/PageHeader',
  component: PageHeader,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof PageHeader>

export default meta

type Story = StoryObj<typeof meta>

export const Basic: Story = {
  name: '基本',
  args: {
    title: '页面标题',
    icon: <ViewIcon />,
    operate: <div>操作区域</div>,
    rootProps: {
      className: 'h-8'
    }
  },
  render: (args) => (
    <ViewBox>
      <PageHeader {...args} />
    </ViewBox>
  )
}

export const Title: Story = {
  name: '标题',
  args: {
    title: '页面标题',
    rootProps: {
      className: 'h-8'
    }
  },
  render: (args) => (
    <ViewBox>
      <PageHeader {...args} />
    </ViewBox>
  )
}

export const Icon: Story = {
  name: '图标',
  args: {
    title: '页面标题',
    icon: <ViewIcon />,
    rootProps: {
      className: ' h-8'
    }
  },
  render: (args) => (
    <ViewBox>
      <PageHeader {...args} />
    </ViewBox>
  )
}

export const Operate: Story = {
  name: '操作区域',
  args: {
    title: '页面标题',
    icon: <ViewIcon />,
    operate: <div>操作区域</div>,
    rootProps: {
      className: 'h-8'
    }
  },
  render: (args) => (
    <ViewBox>
      <PageHeader {...args} />
    </ViewBox>
  )
}
