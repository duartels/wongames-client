import { Meta, StoryObj } from '@storybook/react'

import { Banner } from '.'

export default {
  title: 'Banner',
  component: Banner
} as Meta

export const Default: StoryObj = {
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/1042x580',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season</p>',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
}
