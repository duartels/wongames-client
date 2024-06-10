'use client'
import React from 'react'
import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from 'styled-icons/material-outlined'

import * as S from './styles'

export const ProfileMenu = () => (
  <S.Nav>
    <S.StyledLink href="/profile/me">
      <AccountCircle size={24} />
      <span>My profile</span>
    </S.StyledLink>

    <S.StyledLink href="/profile/cards">
      <CreditCard size={24} />
      <span>My cards</span>
    </S.StyledLink>

    <S.StyledLink href="/profile/orders">
      <FormatListBulleted size={24} />
      <span>My orders</span>
    </S.StyledLink>

    <S.StyledLink href="/logout">
      <ExitToApp size={24} />
      <span>Sign out</span>
    </S.StyledLink>
  </S.Nav>
)
