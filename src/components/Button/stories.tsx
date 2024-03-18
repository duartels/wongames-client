import { Meta, StoryObj } from '@storybook/react'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now'
  }
}
