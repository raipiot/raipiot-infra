import { DetailField } from '@raipiot-infra/antd'
import type { Meta, StoryObj } from '@storybook/react'

const { DateString } = DetailField

const meta = {
  title: 'raipiot 设计系统/数据展示/DateString',
  component: DateString,
  parameters: {},
  tags: ['autodocs']
} satisfies Meta<typeof DateString>

export default meta

type Story = StoryObj<typeof meta>

export const LastYearDate: Story = {
  name: '往年日期',
  args: {
    value: '2020-12-31T23:59:59.999Z'
  }
}

export const ThisYearDate: Story = {
  name: '今年日期',
  args: {
    value: new Date().toISOString()
  }
}

export const CustomSeparator: Story = {
  name: '格式化',
  args: {
    value: new Date().toISOString(),
    shortDateFormatter: 'MM/DD HH:mm',
    longDateFormatter: 'YYYY/MM/DD HH:mm:ss'
  }
}

export const TextColor: Story = {
  name: '文字颜色',
  args: {
    value: new Date().toISOString(),
    textColor: '#0078d7'
  }
}
