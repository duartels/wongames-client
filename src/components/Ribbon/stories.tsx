import { Meta } from '@storybook/react'

import { Ribbon, RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: Ribbon
} as Meta

export const Default = {
  render: (args: RibbonProps) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  ),
  args: {
    children: 'Best Seller'
  }
}
