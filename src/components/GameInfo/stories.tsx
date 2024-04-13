import { Meta, StoryObj } from '@storybook/react'

import { GameInfo, GameInfoProps } from '.'
import { mockGameInfo } from './mock'

export default {
  title: 'GameInfo',
  component: GameInfo
} as Meta

export const Default: StoryObj<GameInfoProps> = {
  render: (args) => (
    <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
      <GameInfo {...args} />
    </div>
  ),
  args: { ...mockGameInfo }
}
