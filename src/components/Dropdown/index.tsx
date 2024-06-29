'use client'
import { PropsWithChildren, useState } from 'react'

import * as S from './styles'

export type DropdownProps = {
  title: React.ReactNode
} & PropsWithChildren

export const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <S.Wrapper $isOpen={isOpen}>
      <S.Title onClick={handleOpen}>{title}</S.Title>

      <S.Content aria-hidden={!isOpen}>{children}</S.Content>
    </S.Wrapper>
  )
}
