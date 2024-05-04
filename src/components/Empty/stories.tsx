import { Meta, StoryObj } from '@storybook/react'

import { Empty, EmptyProps } from '.'

export default {
  title: 'Empty',
  component: Empty
} as Meta

export const Default: StoryObj<EmptyProps> = {
  render: (args) => <Empty {...args} />,
  args: {
    title: 'A simple title',
    description: 'A simple description',
    hasLink: true
  }
}
