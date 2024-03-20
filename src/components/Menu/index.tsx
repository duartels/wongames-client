import { useState } from 'react'
import {
  Close as CloseIcon,
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'styled-icons/material-outlined'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'

import { Logo } from '../Logo'
import * as S from './styles'

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <S.IconWrapper onClick={() => setIsOpen(true)}>
        <MenuIcon aria-label="Open Menu" />
      </S.IconWrapper>

      <S.LogoWrapper>
        <Logo $hideOnMobile />
      </S.LogoWrapper>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <ShoppingCartIcon aria-label="Shopping cart" />
        </S.IconWrapper>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <S.IconWrapper onClick={() => setIsOpen(false)}>
          <CloseIcon aria-label="Close Menu" />
        </S.IconWrapper>
      </S.MenuFull>
    </S.Wrapper>
  )
}
