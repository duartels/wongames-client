import { Meta, StoryObj } from '@storybook/react'

import { ExploreSidebar, ExploreSidebarProps } from '.'
import { mockExploresiderbarFilters } from './mock'

export default {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: StoryObj<ExploreSidebarProps> = {
  render: (args) => <ExploreSidebar {...args} />,
  args: {
    items: mockExploresiderbarFilters
  }
}