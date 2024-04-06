import { Meta, StoryObj } from '@storybook/react'

import { Checkbox } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj = {}
