'use client'
import { Button } from '../Button'
import { Ribbon, RibbonColors, RibbonSizes } from '../Ribbon'
import * as S from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

export const Banner = ({
  img,
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
}: BannerProps) => (
  <S.Wrapper>
    <S.Image src={img} role="img" aria-label={title} />
    <S.Caption>
      <S.Title>{title}</S.Title>
      <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </S.Caption>

    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
  </S.Wrapper>
)
