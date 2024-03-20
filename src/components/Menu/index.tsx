import {
  Search as SearchIcon,
  ShoppingCart as ShoppingCartIcon
} from 'styled-icons/material-outlined'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'

import { Logo } from '../Logo'
import * as S from './styles'

export const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
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
  </S.Wrapper>
)
