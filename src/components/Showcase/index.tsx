'use client'
import { GameCardProps } from '../GameCard'
import { GameCardSlider } from '../GameCardSlider'
import { Heading } from '../Heading'
import { Highlight, HighlightProps } from '../Highlight'
import * as S from './styles'

export type ShowcaseProps = {
  title?: string
  highlight?: HighlightProps
  games?: GameCardProps[]
  gamesCardSliderArrowsColor?: 'black' | 'white'
}

export const Showcase = ({
  title,
  highlight,
  games,
  gamesCardSliderArrowsColor = 'white'
}: ShowcaseProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    {!!highlight && <Highlight {...highlight} />}
    {!!games && (
      <GameCardSlider items={games} color={gamesCardSliderArrowsColor} />
    )}
  </S.Wrapper>
)
