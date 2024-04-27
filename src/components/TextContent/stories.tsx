import { Meta, StoryObj } from '@storybook/react'

import { TextContent, TextContentProps } from '.'
import { mockTextContent } from './mock'

export default {
  title: 'TextContent',
  component: TextContent
} as Meta

export const Default: StoryObj<TextContentProps> = {
  render: () => <TextContent {...mockTextContent} />
}
