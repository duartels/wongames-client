import Link from 'next/link'
import { lighten } from 'polished'
import styled, { css } from 'styled-components'

export const ForgotPassword = styled(Link)`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;

    &:hover {
      color: ${lighten(0.2, theme.colors.black)};
    }
  `}
`
