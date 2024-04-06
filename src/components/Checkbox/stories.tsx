import { Meta, StoryObj } from '@storybook/react'

import { Checkbox, CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  }
} as Meta

export const Default: StoryObj<CheckboxProps> = {
  render: (args) => <Checkbox {...args} />
}

export const WithLabel: StoryObj<CheckboxProps> = {
  render: (args) => <Checkbox {...args} />,
  args: {
    label: 'checkbox label',
    labelFor: 'check',
    labelColor: 'black',
    isChecked: true
  }
}
