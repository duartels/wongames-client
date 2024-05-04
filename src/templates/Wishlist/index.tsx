import { Container } from '@/components/Container'
import { GameCard, GameCardProps } from '@/components/GameCard'
import { Heading } from '@/components/Heading'
import { HighlightProps } from '@/components/Highlight'
import { Showcase } from '@/components/Showcase'

import { Base } from '../Base'
// import * as S from './styles'

export type WishlistProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

export const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      {games?.map((game) => <GameCard key={game.title} {...game} />)}
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)
