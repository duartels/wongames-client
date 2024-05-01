'use client'
import { Gallery, GalleryImageProps } from '@/components/Gallery'
import { GameDetails, GameDetailsProps } from '@/components/GameDetails'
import { GameInfo, GameInfoProps } from '@/components/GameInfo'
import { TextContent } from '@/components/TextContent'

import { Base } from '../Base'
import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  description: string
  details: GameDetailsProps
  gallery?: GalleryImageProps[]
}

export const Game = ({
  cover,
  gameInfo,
  description,
  details,
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
      </S.SectionGameDetails>
    </S.Main>
  </Base>
)
