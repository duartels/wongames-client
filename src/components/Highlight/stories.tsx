import { Meta, StoryObj } from '@storybook/react'

import { Highlight, HighlightProps } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/link',
    backgroundImage: '/img/red-dead-img.jpg'
  },
  parameters: {
    layout: 'fullscreen'
  }
}

export const WithFloatImage: StoryObj<HighlightProps> = {
  render: (args) => (
    <div style={{ maxWidth: '104rem' }}>
      <Highlight {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    floatImage: '/img/red-dead-float.png'
  },
  parameters: {
    layout: 'fullscreen'
  }
}
