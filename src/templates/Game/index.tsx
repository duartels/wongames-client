'use client'
import { Divider } from '@/components/Divider'
import { Gallery, GalleryImageProps } from '@/components/Gallery'
import { GameCardProps } from '@/components/GameCard'
import { GameDetails, GameDetailsProps } from '@/components/GameDetails'
import { GameInfo, GameInfoProps } from '@/components/GameInfo'
import { HighlightProps } from '@/components/Highlight'
import { Showcase } from '@/components/Showcase'
import { TextContent } from '@/components/TextContent'

import { Base } from '../Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
  gallery?: GalleryImageProps[]
}

export const Game = ({
  cover,
  gameInfo,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames,
  gallery
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {!!gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </S.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </S.Main>
  </Base>
)
