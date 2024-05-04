'use client'
import Link from 'next/link'

import { Button } from '../Button'
import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

export const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image src="/img/empty.svg" alt="A gamer in a couch playing videogame" />

    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    {hasLink && (
      <Link href="/">
        <Button title="Go back to store">Go back to store</Button>
      </Link>
    )}
  </S.Wrapper>
)
