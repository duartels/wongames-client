'use client'

import styled, { css } from 'styled-components'
import media from 'styled-media-query'

export const Divider = styled.hr`
  ${({ theme }) => css`
    border: 0;
    height: 0.1rem;
    background: rgba(181, 181, 181, 0.3);
    margin: ${theme.spacings.xxlarge} auto ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      margin: calc(${theme.spacings.xxlarge} * 2.5) auto ${theme.spacings.xxlarge};
    `}
  `}
`
