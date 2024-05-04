'use client'
import styled, { css } from 'styled-components'

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    margin: ${theme.spacings.medium} 0;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: ${theme.grid.gutter};
  `}
`
