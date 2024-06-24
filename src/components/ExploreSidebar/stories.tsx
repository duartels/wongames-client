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
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  ),
  args: {
    items: mockExploresiderbarFilters
  }
}

export const WithInitialValues: StoryObj<ExploreSidebarProps> = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  ),
  args: {
    items: mockExploresiderbarFilters,
    initialValues: {
      windows: true,
      sort_by: 'low-to-high'
    }
  }
}
