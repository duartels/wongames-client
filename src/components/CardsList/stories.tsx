import { Meta, StoryObj } from '@storybook/react'

import { mockPaymentOptions } from '../PaymentOptions/mock'
import { CardsList, CardsListProps } from '.'

export default {
  title: 'Profile/CardsList',
  component: CardsList
} as Meta

export const Default: StoryObj<CardsListProps> = {
  render: (args) => (
    <div style={{ maxWidth: 850, margin: 'auto' }}>
      <CardsList {...args} />
    </div>
  ),
  args: {
    cards: mockPaymentOptions.cards
  }
}
