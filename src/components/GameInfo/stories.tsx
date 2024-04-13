import { Meta, StoryObj } from '@storybook/react'

import { GameInfo, GameInfoProps } from '.'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  args: {
    title: 'Game Title',
    description: 'Game Description',
    price: '210.00'
  }
}
