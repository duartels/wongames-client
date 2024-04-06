import { Meta, StoryObj } from '@storybook/react'
import { AddShoppingCart } from 'styled-icons/material-outlined'

import { TextField, TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' }
  }
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

export const WithIcon: StoryObj<TextFieldProps> = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'Label',
    labelFor: 'label',
    initialValue: '',
    placeholder: 'Type something',
    id: 'label',
    name: 'label',
    icon: <AddShoppingCart />
  }
}

export const WithError: StoryObj<TextFieldProps> = {
  render: (args) => <TextField {...args} />,
  args: {
    label: 'Label',
    labelFor: 'label',
    initialValue: '',
    placeholder: 'Type something',
    id: 'label',
    name: 'label',
    errorMessage: 'Error message'
  }
}
