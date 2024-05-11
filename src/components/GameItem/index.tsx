/* eslint-disable @next/next/no-img-element */
import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

export const GameItem = ({ img, price, title }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContent>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.Content>
    </S.GameContent>
  </S.Wrapper>
)
