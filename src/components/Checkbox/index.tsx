'use client'
import { InputHTMLAttributes, useState } from 'react'

import * as S from './styles'

type CheckboxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
} & InputHTMLAttributes<HTMLInputElement>

export const Checkbox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(false)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    !!onCheck && onCheck(status)
  }

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={labelFor}
        onChange={onChange}
        checked={checked}
        {...props}
      />
      {!!label && (
        <S.Label htmlFor={labelFor} $labelColor={labelColor}>
          {label}
        </S.Label>
      )}
    </S.Wrapper>
  )
}
