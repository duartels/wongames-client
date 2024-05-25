import { Meta, StoryObj } from '@storybook/react'

import { PaymentOptions, PaymentOptionsProps } from '.'
import { mockPaymentOptions } from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  ),
  args: {
    ...mockPaymentOptions
  }
}
