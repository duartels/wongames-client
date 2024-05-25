/* eslint-disable @next/next/no-img-element */
import { Add } from 'styled-icons/material-outlined'

import { Button } from '../Button'
import { Heading } from '../Heading'
import { Radio } from '../Radio'
import * as S from './styles'

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export const PaymentOptions = ({
  handlePayment,
  cards
}: PaymentOptionsProps) => (
  <S.Wrapper>
    <S.Body>
      <Heading lineBottom color="black" size="small">
        Payment
      </Heading>

      <S.CardsList>
        {cards?.map((card) => (
          <S.CardItem key={card.number}>
            <S.CardInfo>
              <img src={card.img} alt={card.flag} />
              {card.number}
            </S.CardInfo>
            <Radio
              name="credit-card"
              id={card.number}
              value={card.number}
              onCheck={() => {}}
            />
          </S.CardItem>
        ))}

        <S.AddCard role="button">
          <Add size={14} /> Add a new credit card
        </S.AddCard>
      </S.CardsList>
    </S.Body>

    <S.Footer>
      <Button as="a" fullWidth minimal>
        Continue shopping
      </Button>
      <Button fullWidth onClick={handlePayment}>
        Buy now
      </Button>
    </S.Footer>
  </S.Wrapper>
)
