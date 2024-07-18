'use client'
import { AddShoppingCart, FavoriteBorder } from 'styled-icons/material-outlined'

import { formatPrice } from '@/lib/format-price'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Ribbon } from '../Ribbon'
import * as S from './styles'

export type GameInfoProps = {
  title: string
  description: string
  price: number
}

export const GameInfo = ({ title, description, price }: GameInfoProps) => (
  <S.Wrapper>
    <Heading lineBottom color="black">
      {title}
    </Heading>

    <Ribbon color="secondary" size="small">
      {formatPrice(price)}
    </Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <Button icon={<AddShoppingCart />} size="large" onClick={() => {}}>
        Add to cart
      </Button>

      <Button icon={<FavoriteBorder />} minimal size="large" onClick={() => {}}>
        Wishlist
      </Button>
    </S.ButtonsWrapper>
  </S.Wrapper>
)
