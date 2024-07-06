import { Meta, StoryObj } from '@storybook/react'

import { UserDropdown, UserDropdownProps } from '.'

export default {
  title: 'UserDropdown',
  component: UserDropdown
} as Meta

export const Default: StoryObj<UserDropdownProps> = {
  render: (args) => (
    <div
      style={{
        maxWidth: '98%',
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <UserDropdown {...args} />
    </div>
  ),
  args: {
    username: 'John Doe'
  }
}
