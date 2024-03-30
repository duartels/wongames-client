import { Meta, StoryObj } from '@storybook/react'

import { BannerSlider, BannerSliderProps } from '.'

export default {
  title: 'BannerSlider',
  component: BannerSlider
} as Meta

const items = [
  {
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    title: 'Defy death 3',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

export const Default: StoryObj<BannerSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <BannerSlider {...args} />
    </div>
  ),
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
