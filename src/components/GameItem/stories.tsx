import { Meta, StoryObj } from '@storybook/react'

import { GameItem, GameItemProps } from '.'
import { mockGameItem } from './mock'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />,
  args: mockGameItem
}

export const WithPayment: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />,
  args: {
    ...mockGameItem,
    downloadLink: 'https://link'
  }
}
