import { Meta, StoryObj } from '@storybook/react'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'TextField',
  component: TextField
} as Meta

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'Label',
    labelFor: 'label',
    initialValue: '',
    placeholder: 'Type something',
    id: 'label',
    name: 'label'
  }
}
