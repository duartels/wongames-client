import { ChevronDown } from 'styled-icons/boxicons-regular'
import {
  AccountCircle,
  ExitToApp,
  FavoriteBorder
} from 'styled-icons/material-outlined'

import { Dropdown } from '../Dropdown'
import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

export const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <S.Nav>
      <S.StyledLink href="/profile/me">
        <AccountCircle size={24} />
        <span>My profile</span>
      </S.StyledLink>

      <S.StyledLink href="/wishlist">
        <FavoriteBorder size={24} />
        <span>Wishlist</span>
      </S.StyledLink>

      <S.StyledLink href="/sign-in">
        <ExitToApp size={24} />
        <span>Sign out</span>
      </S.StyledLink>
    </S.Nav>
  </Dropdown>
)
