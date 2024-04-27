import { Meta, StoryObj } from '@storybook/react'

import { Gallery, GalleryProps } from '.'
import { mockGallery } from './mock'

export default {
  title: 'Gallery',
  component: Gallery
} as Meta

export const Default: StoryObj<GalleryProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Gallery {...args} />
    </div>
  ),
  args: {
    items: mockGallery
  }
}
