import { Meta, StoryObj } from '@storybook/react'

import { Radio, RadioProps } from '.'

export default {
  title: 'Form/Radio',
  component: Radio
} as Meta

export const Default: StoryObj<RadioProps> = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <Radio {...args} name="nome" />
      <Radio
        {...args}
        name="nome"
        label="Radio 2"
        labelFor="Radio2"
        value="anyValue2"
      />
      <Radio
        {...args}
        name="nome"
        label="Radio 3"
        labelFor="Radio3"
        value="anyValue3"
      />
    </div>
  ),
  args: {
    label: 'Radio',
    labelFor: 'Radio',
    value: 'anyValue'
  }
}
