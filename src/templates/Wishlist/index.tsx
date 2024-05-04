import { Container } from '@/components/Container'
import { Divider } from '@/components/Divider'
import { GameCard, GameCardProps } from '@/components/GameCard'
import { Grid } from '@/components/Grid'
import { Heading } from '@/components/Heading'
import { HighlightProps } from '@/components/Highlight'
import { Showcase } from '@/components/Showcase'

import { Base } from '../Base'

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

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`whislist-${index}`} {...game} />
        ))}
      </Grid>

      <Divider />
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)
