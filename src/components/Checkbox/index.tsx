import * as S from './styles'

type CheckboxProps = {
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
}

export const Checkbox = ({
  label,
  labelFor = '',
  labelColor = 'white'
}: CheckboxProps) => (
  <S.Wrapper>
    <S.Input type="checkbox" id={labelFor} />
    {!!label && (
      <S.Label htmlFor={labelFor} $labelColor={labelColor}>
        {label}
      </S.Label>
    )}
  </S.Wrapper>
)
