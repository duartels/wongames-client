import * as S from './styles'

type CheckboxProps = {
  label?: string
  labelFor?: string
}

export const Checkbox = ({ label, labelFor = '' }: CheckboxProps) => (
  <S.Wrapper>
    <input type="checkbox" id={labelFor} />
    {!!label && <label htmlFor={labelFor}>{label}</label>}
  </S.Wrapper>
)
