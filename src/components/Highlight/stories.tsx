import { Meta, StoryObj } from '@storybook/react'

import { Highlight } from '.'

export default {
  title: 'Highlight',
  component: Highlight
} as Meta

export const Default: StoryObj = {
  args: {
    title: 'Read Dead is back!',
    subtitle: 'Come see John’s new adventures',
    buttonLabel: 'Buy now',
    buttonLink: '/link'
  }
}
