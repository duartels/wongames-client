import { Apple, Linux, Windows } from 'styled-icons/fa-brands'

import { Heading } from '../Heading'
import { MediaMatch } from '../MediaMatch'
import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'
export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
}

export const GameDetails = ({
  developer,
  releaseDate,
  platforms
}: GameDetailsProps) => {
  const platformIcons = {
    windows: <Windows title="Windows" size={18} />,
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />
  }

  return (
    <S.Wrapper>
      <MediaMatch $greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Title>Developer</S.Title>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Release Date</S.Title>
          <S.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Platforms</S.Title>
          <S.Description>
            <S.IconsWrapper>
              {platforms.map((platform) => (
                <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
              ))}
            </S.IconsWrapper>
          </S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Publisher</S.Title>
          <S.Description>CD Projekt</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Rating</S.Title>
          <S.Description>18+</S.Description>
        </S.Block>

        <S.Block>
          <S.Title>Genres</S.Title>
          <S.Description>Action / Adventure</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  )
}
