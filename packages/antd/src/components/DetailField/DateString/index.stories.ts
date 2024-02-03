import type { Meta, StoryObj } from '@storybook/react'

import { DateString } from '.'

const meta = {
  title: 'DetailField/DateString',
  component: DateString,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
} satisfies Meta<typeof DateString>

export default meta

type Story = StoryObj<typeof meta>

export const LastYearDate: Story = {
  args: {
    value: '2020-12-31T23:59:59.999Z'
  }
}

export const ThisYearDate: Story = {
  args: {
    value: new Date().toISOString()
  }
}

export const CustomSeparator: Story = {
  args: {
    value: new Date().toISOString(),
    shortDateFormatter: 'MM/DD HH:mm',
    longDateFormatter: 'YYYY/MM/DD HH:mm:ss'
  }
}

export const TextColor: Story = {
  args: {
    value: new Date().toISOString(),
    textColor: '#0078d7'
  }
}
