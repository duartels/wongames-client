import { Meta, StoryObj } from '@storybook/react'

import { CartIcon, CartIconProps } from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<CartIconProps> = {
  render: (args) => <CartIcon {...args} />
}

export const WithBadge: StoryObj<CartIconProps> = {
  render: (args) => <CartIcon {...args} />,
  args: {
    quantity: 3
  }
}
