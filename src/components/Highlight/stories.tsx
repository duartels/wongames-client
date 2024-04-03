import { Meta, StoryObj } from '@storybook/react'

import { Highlight, HighlightProps } from '.'
import { mockHighlight } from './mock'

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
  args: { ...mockHighlight },
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
