import { Meta, StoryObj } from '@storybook/react'

import { MediaMatch } from '.'

export default {
  title: 'MediaMatch',
  component: MediaMatch
} as Meta

export const Desktop: StoryObj = {
  render: () => (
    <MediaMatch greaterThan="medium">
      <h1>Desktop</h1>
    </MediaMatch>
  )
}

export const Mobile: StoryObj = {
  render: () => (
    <MediaMatch lessThan="medium">
      <h1>Mobile</h1>
    </MediaMatch>
  ),
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
