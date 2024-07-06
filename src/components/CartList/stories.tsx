import { Meta, StoryObj } from '@storybook/react'

import { CartList, CartListProps } from '.'
import { mockCartList } from './mock'

export default {
  title: 'CartList',
  component: CartList,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  ),
  args: {
    items: mockCartList,
    total: 'R$ 399,80'
  }
}

export const WithButton: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  ),
  args: {
    items: mockCartList,
    total: 'R$ 399,80',
    hasButton: true
  }
}

export const Empty: StoryObj<CartListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 800 }}>
      <CartList {...args} />
    </div>
  ),
  args: {
    items: []
  }
}
