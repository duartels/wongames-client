import { Meta, StoryObj } from '@storybook/react'

import { GameCard, GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard
} as Meta

export const Default: StoryObj<GameCardProps> = {
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    title: 'Population Zero',
    developer: 'Rockstar Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00'
  }
}

export const WithPromotionalPrice: StoryObj<GameCardProps> = {
  render: (args: GameCardProps) => (
    <div style={{ width: '30rem' }}>
      <GameCard {...args} />
    </div>
  ),
  args: {
    ...Default.args,
    promotionalPrice: 'R$ 215,00'
  }
}
