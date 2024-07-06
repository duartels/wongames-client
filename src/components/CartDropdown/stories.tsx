import { Meta, StoryObj } from '@storybook/react'

import { mockCartList } from '../CartList/mock'
import { CartDropdown, CartDropdownProps } from '.'

export default {
  title: 'CartDropdown',
  component: CartDropdown
} as Meta

export const Default: StoryObj<CartDropdownProps> = {
  render: (args) => (
    <div
      style={{
        maxWidth: '98%',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <CartDropdown {...args} />
    </div>
  ),
  args: {
    items: mockCartList,
    total: 'R$ 430,00'
  }
}
