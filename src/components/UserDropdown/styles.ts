import Link from 'next/link'
import styled, { css } from 'styled-components'

export const Username = styled.span`
  ${({ theme }) => css`
    padding: 0 ${theme.spacings.xxsmall};
  `}
`

export const Nav = styled.nav`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 26rem;

    a:not(:last-child) {
      border-bottom: 0.1rem solid ${theme.colors.lightGray};
    }
  `}
`

export const StyledLink = styled(Link)`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    text-decoration: none;
    background: ${theme.colors.white};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall} ${theme.spacings.small};
    transition: background, color, ${theme.transition.default};

    &:hover {
      background: ${theme.colors.primary};
      color: ${theme.colors.white};
    }

    > span {
      margin-left: ${theme.spacings.xsmall};
    }
  `}
`
