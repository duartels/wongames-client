import { Meta, StoryObj } from '@storybook/react'

import { GameItem, GameItemProps } from '.'

export default {
  title: 'GameItem',
  component: GameItem
} as Meta

export const Default: StoryObj<GameItemProps> = {
  render: (args) => <GameItem {...args} />,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Red Dead Redemption 2',
    price: 'R$ 215,00'
  }
}
