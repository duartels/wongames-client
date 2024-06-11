import styled, { css } from 'styled-components'

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    padding: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;

    &:not(:last-child) {
      margin-bottom: ${theme.spacings.xsmall};
    }

    > span {
      margin-left: ${theme.spacings.xxsmall};
    }
  `}
`
