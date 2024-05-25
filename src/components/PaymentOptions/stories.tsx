import { Meta, StoryObj } from '@storybook/react'

import { PaymentOptions, PaymentOptionsProps } from '.'
import { mockPaymentOptions } from './mock'

export default {
  title: 'PaymentOptions',
  component: PaymentOptions
} as Meta

export const Default: StoryObj<PaymentOptionsProps> = {
  render: (args) => <PaymentOptions {...args} />,
  args: {
    ...mockPaymentOptions
  }
}
