/* eslint-disable @next/next/no-img-element */
'use client'
import { Heading } from '../Heading'
import { PaymentCard } from '../PaymentOptions'
import * as S from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

export const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom size="small" color="black">
      My Cards
    </Heading>

    {cards?.map((card) => (
      <S.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </S.Card>
    ))}
  </>
)
