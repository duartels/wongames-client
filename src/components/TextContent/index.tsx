import { Heading } from '../Heading'
import * as S from './styles'

export type TextContentProps = {
  content: string
  title?: string
}

export const TextContent = ({ content, title }: TextContentProps) => (
  <S.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}

    <div dangerouslySetInnerHTML={{ __html: content }} />
  </S.Wrapper>
)
