import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

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

export const WithIcon: StoryObj = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}
