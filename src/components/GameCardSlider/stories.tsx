import { Meta, StoryObj } from '@storybook/react'

import { GameCardSlider, GameCardSliderProps } from '.'
import { mockGameCardSlider } from './mock'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider
} as Meta

export const Default: StoryObj<GameCardSliderProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameCardSlider {...args} />
    </div>
  ),
  args: {
    items: mockGameCardSlider
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
}
