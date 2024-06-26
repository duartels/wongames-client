import styled, { css } from 'styled-components'
import { DefaultTheme } from 'styled-components/dist/types'

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    background: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: 0 ${theme.spacings.xsmall};
    border: 0.2rem solid;
    border-color: ${theme.colors.lightGray};

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`

type InputProps = {
  $iconPosition: 'left' | 'right'
}

export const Input = styled.input<InputProps>`
  ${({ theme, $iconPosition }) => css`
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    padding-${$iconPosition}: ${theme.spacings.xsmall};
    background: transparent;
    border: 0;
    outline: none;
    width: 100%;
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    cursor: pointer;
  `}
`

type IconProps = {
  $iconPosition: 'left' | 'right'
}

export const Icon = styled.div<IconProps>`
  ${({ theme, $iconPosition }) => css`
    display: flex;
    color: ${theme.colors.gray};
    width: 2.2rem;
    order: ${$iconPosition === 'right' ? 1 : 0};

    & > svg {
      width: 100%;
    }
  `}
`

export const ErrorMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`

const wrapperModifiers = {
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input},
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};
      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border-color: ${theme.colors.red};
    }
    ${Icon},
    ${Label} {
      color: ${theme.colors.red};
    }
  `
}

type WrapperProps = {
  disabled?: boolean
  $hasError?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, $hasError }) => css`
    ${disabled && wrapperModifiers.disabled(theme)}
    ${$hasError && wrapperModifiers.error(theme)}
  `}
`
