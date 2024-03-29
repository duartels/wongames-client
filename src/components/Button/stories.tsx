import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from '@styled-icons/material-outlined/AddShoppingCart'

import { Button, ButtonProps } from '.'

export default {
  title: 'Button',
  component: Button
} as Meta

export const Default: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
    icon: <AddShoppingCart />
  }
}

export const AsLink: StoryObj<ButtonProps> = {
  render: (args: ButtonProps) => <Button {...args} />,
  args: {
    children: 'Buy now',
    as: 'a',
    href: '/link'
  }
}
