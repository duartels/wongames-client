'use client'
import Link from 'next/link'
import { useState } from 'react'
import {
  Close as CloseIcon,
  Search as SearchIcon
} from 'styled-icons/material-outlined'
import { Menu2 as MenuIcon } from 'styled-icons/remix-fill'

import { Button } from '../Button'
import { CartDropdown } from '../CartDropdown'
import { CartIcon } from '../CartIcon'
import { Logo } from '../Logo'
import { MediaMatch } from '../MediaMatch'
import { UserDropdown } from '../UserDropdown'
import * as S from './styles'

type MenuProps = {
  username?: string
}

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch $lessThan="medium">
        <S.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/">
          <Logo $hideOnMobile />
        </Link>
      </S.LogoWrapper>

      <MediaMatch $greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.IconWrapper>
          <SearchIcon aria-label="Search" />
        </S.IconWrapper>
        <S.IconWrapper>
          <MediaMatch $greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch $lessThan="medium">
            <Link href="/cart">
              <CartIcon />
            </Link>
          </MediaMatch>
        </S.IconWrapper>

        <MediaMatch $greaterThan="medium">
          {!username ? (
            <Link href="/sign-in">
              <Button>Sign in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} $isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />

        <S.MenuNav>
          <S.MenuLink href="/">Home</S.MenuLink>
          <S.MenuLink href="/games">Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink href="/profile/me">My profile</S.MenuLink>
              <S.MenuLink href="/wishlist">Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Link href="/sign-in">
              <Button fullWidth size="large">
                Sign in now
              </Button>
            </Link>
            <span>or</span>
            <S.CreateAccount href="/sign-up" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  )
}
