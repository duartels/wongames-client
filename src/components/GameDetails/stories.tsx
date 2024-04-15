import { Meta, StoryObj } from '@storybook/react'

import { GameDetails, GameDetailsProps } from '.'
import { gameDetailsMock } from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  argTypes: {
    platforms: {
      control: 'inline-check',
      options: ['windows', 'linux', 'mac']
    }
  }
} as Meta<GameDetailsProps>

export const Default: StoryObj<GameDetailsProps> = {
  render: (args) => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <GameDetails {...args} />
    </div>
  ),
  args: {
    ...gameDetailsMock
  }
}
