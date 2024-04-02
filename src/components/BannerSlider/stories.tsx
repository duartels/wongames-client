import { Meta, StoryObj } from '@storybook/react'

import { BannerSlider, BannerSliderProps } from '.'
import { mockBannerSlider } from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  ),
  args: {
    items: mockBannerSlider
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
