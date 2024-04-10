import { Meta, StoryObj } from '@storybook/react'

import { mockGameCardSlider } from '../GameCardSlider/mock'
import { mockHighlight } from '../Highlight/mock'
import { Showcase, ShowcaseProps } from '.'

export default {
  title: 'Showcase',
  component: Showcase,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Showcase',
    highlight: mockHighlight,
    games: mockGameCardSlider
  }
}

export const WithoutTitle: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />,
  args: {
    highlight: mockHighlight,
    games: mockGameCardSlider
  }
}

export const WithoutHighlight: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Showcase',
    games: mockGameCardSlider
  }
}

export const WithoutGames: StoryObj<ShowcaseProps> = {
  render: (args) => <Showcase {...args} />,
  args: {
    title: 'Showcase',
    highlight: mockHighlight
  }
}
