import { Meta, StoryObj } from '@storybook/react'

import { OrdersList, OrdersListProps } from '.'
import { mockOrdersList } from './mock'

export default {
  title: 'Profile/OrdersList',
  component: OrdersList
} as Meta

export const Default: StoryObj<OrdersListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <OrdersList {...args} />
    </div>
  ),
  args: {
    items: mockOrdersList
  }
}
