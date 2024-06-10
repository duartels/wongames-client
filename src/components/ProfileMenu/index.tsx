'use client'
import React from 'react'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

import * as S from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders'
}

export const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <S.Nav>
    <S.StyledLink
      href="/profile/me"
      $isActive={activeLink === '/profile/me'}
      title="My profile"
    >
      <AccountCircle size={24} />
      <span>My profile</span>
    </S.StyledLink>

    <S.StyledLink
      href="/profile/cards"
      $isActive={activeLink === '/profile/cards'}
      title="My cards"
    >
      <CreditCard size={24} />
      <span>My cards</span>
    </S.StyledLink>

    <S.StyledLink
      href="/profile/orders"
      $isActive={activeLink === '/profile/orders'}
      title="My orders"
    >
      <FormatListBulleted size={24} />
      <span>My orders</span>
    </S.StyledLink>

    <S.StyledLink href="/logout" title="Sign out">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.StyledLink>
  </S.Nav>
)
